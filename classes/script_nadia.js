const fs = require('fs');
const { promisify } = require('util');
const { harFromMessages } = require('/usr/local/node_modules/chrome-har');
const puppeteer = require('/usr/local/node_modules/puppeteer');
const customHeadersConfig = require('/var/www/scans/external/scripts/custom-headers.json');
const patternExclusion = require('/var/www/scans/external/scripts/patternExclusion.json');
const regexListToExclude = patternExclusion["regexList"];
const dataCollectedLengthThreshold = require('/var/www/scans/external/scripts/config.json')["dataCollectedLengthThreshold"];
const userFlowsConfiguration = require('/var/www/scans/external/micro_services/configuration/flow-settings.json');
const userFlowProcessConfig = require('/var/www/scans/external/micro_services/configuration/config.json');
const puppeteerUserAgent = require('/var/www/scans/external/scripts/config.json')["puppeteerUserAgent"];

let scanResults = [];
let networkEvents = [];

// event types to observe
const observe = [
    'Page.loadEventFired',
    'Page.domContentEventFired',
    'Page.frameStartedLoading',
    'Page.frameAttached',
    'Network.requestWillBeSent',
    'Network.requestServedFromCache',
    'Network.dataReceived',
    'Network.responseReceived',
    'Network.resourceChangedPriority',
    'Network.loadingFinished',
    'Network.loadingFailed',
];

const start = process.argv[2];
const configurationIndex = process.argv[3];

//--------------------------------------------------------------
let userFlowConfigurationObject = {};
if(typeof userFlowsConfiguration[start] === "undefined"
    && typeof userFlowsConfiguration[start][configurationIndex] === "undefined") {
    process.exit();
} else {
    userFlowConfigurationObject = userFlowsConfiguration[start][configurationIndex];
}

let pageWaitTime = (typeof userFlowProcessConfig["waitTime"] === "undefined"
    || typeof userFlowProcessConfig["waitTime"] === "undefined") ? 5000 : userFlowProcessConfig["waitTime"];

let defaultArgs = ['--no-sandbox', '--disable-setuid-sandbox', '--start-fullscreen'];

if (typeof userFlowProcessConfig["disableWebSecurity"] !== "undefined" && userFlowProcessConfig["disableWebSecurity"]) {
    defaultArgs.push('--disable-web-security');
}

async function run() {
    const browser = await puppeteer.launch({ headless: true,
        args: defaultArgs,
        executablePath: '/usr/bin/google-chrome'
    });
    const page = await browser.newPage();

    await page.setUserAgent(puppeteerUserAgent);
    await page.setDefaultNavigationTimeout(0);
    // Custom headers
    const customHeaders = customHeadersConfig;

    await page.setExtraHTTPHeaders(customHeaders);

    let counter = 0;

    for (flowConfiguration of userFlowConfigurationObject) {
        networkEvents = [];
        await registerEventsListeners(page, observe);

        const pageUrl = flowConfiguration["pageUrl"];
        const mainSelectorId = flowConfiguration["mainSelectorId"];
        const optionFields = flowConfiguration["optionFields"];
        const fillFields = flowConfiguration["fillFields"];
        const nextUrl = flowConfiguration["nextUrl"];

        if(pageUrl !== "") {
            await page.goto(pageUrl);
        }

        await page.waitFor(pageWaitTime);
        await page.screenshot({path: '/var/www/scans/external/micro_services/ss_nadia/flow' + counter + '.png', fullPage: true});

        counter++;

        // Option Fields
        if(optionFields.length > 0) {
            for (option of optionFields) {
                const optionSelectorType = option["optionSelectorType"];
                const optionSelectorId = option["optionSelectorId"];
                const optionSelectorValue = option["optionSelectorValue"];
                try {
                    if(optionSelectorType === "checkbox") {
                        //await page.click(optionSelectorId);
                        await page.evaluate((optionSelectorId) => {
                            document.querySelector(optionSelectorId).click();
                        }, optionSelectorId);
                    } else if (optionSelectorType === "dropdown") {
                        await page.select(optionSelectorId, optionSelectorValue);
                    } else if (optionSelectorType === "radio") {}
                } catch (e) {}
            }

            await page.waitFor(pageWaitTime);
            await page.screenshot({path: '/var/www/scans/external/micro_services/ss_nadia/flow' + counter + '.png', fullPage: true});

            counter++;
        }

        // Fill Input Fields
        if(fillFields.length > 0) {
            for (option of fillFields) {
                const fieldType = option["fieldType"];
                const fieldInput = option["fieldInput"];
                const fieldValue = option["fieldValue"];

                try {
                    if(fieldType === "dropdown") {
                        await page.select(fieldInput, fieldValue);
                    } else if (fieldType === "text") {
                        await page.type(fieldInput, fieldValue);
                    }else if(fieldType === "checkbox") {
                        //await page.click(optionSelectorId);
                        await page.evaluate((fieldInput) => {
                            document.querySelector(fieldInput).click();
                        }, fieldInput);
                    } else {
                        await page.evaluate((fieldInput, fieldValue) => {
                            document.querySelector(fieldInput).value = fieldValue;
                        }, fieldInput, fieldValue);
                    }
                } catch (e) {}
            }

            await page.waitFor(pageWaitTime);
            await page.screenshot({path: '/var/www/scans/external/micro_services/ss_nadia/flow' + counter + '.png', fullPage: true});

            counter++;
        }

        // Main selector
        if(mainSelectorId !== "") {
            //await page.click(mainSelectorId);
            await page.waitForSelector(mainSelectorId);
            await page.evaluate((mainSelectorId) => {
                document.querySelector(mainSelectorId).click();
            }, mainSelectorId);

            await page.waitFor(pageWaitTime);
            await page.screenshot({path: '/var/www/scans/external/micro_services/ss_nadia/flow' + counter + '.png', fullPage: true});

            counter++;
        }

        if(nextUrl !== "") {
            await page.goto(nextUrl);
            await page.waitFor(pageWaitTime);
            await page.screenshot({path: '/var/www/scans/external/micro_services/ss_nadia/flow' + counter + '.png', fullPage: true});

            counter++;
        }

        const results = await generateScanResults(pageUrl, page, observe);

        scanResults.push(results);
    }

    await browser.close();

    console.log(JSON.stringify({
        "success": 1,
        "data": scanResults,
        "message": ""
    }));
}

function extractHostname(url) {
    let hostname;

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

function excludePattern(string) {
    let patternFound = false;

    for(let i = 0; i < regexListToExclude.length; i++) {
        const regex = new RegExp(regexListToExclude[i]);
        if(regex.test(string)) {
            patternFound = true;
            break;
        }
    }

    return patternFound;
}

// Register events listeners
async function registerEventsListeners(page, observe) {
    // List of events for converting to HAR
    const client = await page.target().createCDPSession();
    await client.send('Page.enable');
    await client.send('Network.enable');
    observe.forEach(method => {
        client.on(method, params => {
            networkEvents.push({ method, params });
        });
    });
}

async function generateScanResults(originalPageUrl, page, observe) {
    const url = await page.url();

    // Check to ensure the url being scanned is the same domain as start
    if(extractHostname(url).indexOf(extractHostname(start)) === -1) {
        const trackstats = {
            imgB: 0,
            scrB: 0,
            othB: 0,
            under1: 0,
            one2five: 0,
            fiveplus: 0
        };

        const har = {
            log: {
                entries: []
            },
            beaconstats: trackstats
        };

        return {data: {linx: [], cooks: [], cooks2: [], har: har, dataColl: [], url: ""}};
    }

    const cookies_array = await page._client.send('Network.getAllCookies');
    const cookies = cookies_array.cookies;

    const links = await page.evaluate((start) => {
        const anchors = document.querySelectorAll('a');

        return [].map.call(anchors,(a) => {
            const href = a.getAttribute('href');
            let url = '';

            if(href === null) {
                return '';
            }

            if(href.length < 3) {
                return '';
            }

            const char1 = href.charAt(0);
            const char2 = href.charAt(1);
            const protocol = href.substring(0, 4);

            if(char1 === '#' || char2 === '/') {
                return '';
            }

            if(char1 === '/') {
                url = 'https://' + start + href;
            } else {
                if(protocol === 'http') {
                    if (href.indexOf(start) !== -1){
                        url = href;
                    } else {
                        return '';
                    }
                }
            }

            return url;
        }).filter(function (link) {
            return link !== '';
        });
    }, start);

    const dataColl = await page.evaluate(() => {
        const inputs = document.querySelectorAll('input');

        return [].map.call(inputs, function(i) {
            if(i.type === 'submit') {
                return {name: '', type: 'submit'};
            }

            if(i.type === 'checkbox') {
                return {name: '', type: 'checkbox'};
            }

            if(i.type === 'radio') {
                return {name: '', type: 'radio'};
            }

            if(i.name && i.name !== '') {
                return {name: i.name, type: i.type};
            } else if (i.id && i.id !== '') {
                return {name: i.id, type: i.type};
            } else if (i.getAttribute("formcontrolname") && i.getAttribute("formcontrolname") !== '') {
                return {name: i.getAttribute("formcontrolname"), type: i.type};
            } else if(i.placeholder && i.placeholder !== ''){
                return {name: i.placeholder, type: ''};
            } else {
                return {name: '', type: ''};
            }
        });
    });

    const dataCollClean = dataColl.filter(
        d => d.name !== ''
            && d.name.length < dataCollectedLengthThreshold
            && !excludePattern(d.name));

    const har = harFromMessages(networkEvents);

    return {data: {linx: links, cooks: cookies, har: har, dataColl: dataCollClean, url: url, originalPageUrl: originalPageUrl}};
}

run()
    .then()
    .catch(err => {
        console.log(JSON.stringify({
            "success": 0,
            "data": [],
            "message": err.stack
        }));
        process.exit(1);
    });
