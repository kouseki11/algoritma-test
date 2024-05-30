function longest(sentence) {
    let words = sentence.split(' ');
    let longestWord = words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
    return `${longestWord}: ${longestWord.length} character`;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longest(sentence));  
