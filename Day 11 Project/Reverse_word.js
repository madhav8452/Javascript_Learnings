function reverseWords(sentence) {
    // Split the sentence into an array of words
    let wordsArray = sentence.split(' ');
    
    // Reverse the array of words
    let reversedArray = wordsArray.reverse();
    
    // Join the reversed array back into a string
    let reversedSentence = reversedArray.join(' ');
    
    return reversedSentence;
}

// Example usage:
let sentence = "Rathod Madhav";
let result = reverseWords(sentence);
console.log(result); // Output: "Madhav Rathod"
