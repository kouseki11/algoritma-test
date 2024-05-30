function reverseAlphabet(input) {
    let letters = input.slice(0, -1).split('');
    let number = input.slice(-1);
    let reversedLetters = letters.reverse().join('');
    return reversedLetters + number;
}

const inputString = "NEGIE1";
console.log(reverseAlphabet(inputString));  
