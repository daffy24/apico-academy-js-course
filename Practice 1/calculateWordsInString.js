function calculateWordsInString(string) {
    let wordCount = 1;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === " " && string[i + 1] !== " ") {
        wordCount++;
      }
    }
  
    return wordCount;
  }
  
  console.log(calculateWordsInString("Easy string for count")); // 4
  console.log(calculateWordsInString("Easy")); // 1
  console.log(calculateWordsInString("Some string with a triple   space")); // 6
  console.log(calculateWordsInString("Some?  string, with a triple   space")); // 6