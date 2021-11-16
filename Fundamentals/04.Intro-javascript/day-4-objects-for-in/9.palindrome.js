function palindrome(word) {
    for(index in word){
        if(word[index] != word[(word.length - 1) - index]){
          return false;
        }
      }
      return true;
}

console.log(palindrome('arara'));