function mispelled(word1, word2){ 
    if (word1.length > word2.length){
      return compareNotEqual(word1, word2)} 
    if (word1.length < word2.length){
      return compareNotEqual(word2, word1)}
    { 
    return compareEqualStr(word1,word2);
    }
  }
  
     function compareNotEqual(longW, shortW){
      return shortW === longW.substring(0, longW.length - 1, ) || shortW === longW.substring(1, longW.length )
    }
    
       function compareEqualStr(word1, word2){
        let count = 0;
          for (let i = 0 ; i < word1.length; i++){
              if (word1[i] != word2[i]){
                count ++ ;
              }               
          }    
              return count > 1 ? false : true 
      }
  