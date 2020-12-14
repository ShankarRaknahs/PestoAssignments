/**
 * @function - To find the valid number of anagrams in it
 * @param - any string/ phrase 
 * @returns - count of anagram
 */

function findAnagramCount(phrase) {
    let uniqueWords = [];
    let anagrams = [];

    if(!phrase){
        return -1;
    }

    phrase.split(/[ \(,\.?)]+/).forEach((word) => {
        let wordSorted = word.trim().toLowerCase().split('').sort().join('');
        if (wordSorted && wordSorted.length > 1 && !uniqueWords.includes(wordSorted)) {
            uniqueWords.push(wordSorted);
        } else if (wordSorted && wordSorted.length > 1 && uniqueWords.includes(wordSorted) && !anagrams.includes(wordSorted)) {
            anagrams.push(wordSorted);
        }
    });
    return anagrams.length;

}


//Test Cases
console.log(findAnagramCount('aa aa odg dog gdo')); // 2
console.log(findAnagramCount('a c b c run urn urn')); // 1
console.log(findAnagramCount('k k k k bar foo')); // 0
console.log(findAnagramCount()); // -1
console.log(findAnagramCount('')); // -1
