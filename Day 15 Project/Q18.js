let str = "banana";

let isVowel = (char) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
};

let allVowels = str.split('').every(isVowel);

console.log(allVowels);