let cipher = require("./cipher.js");
let encrypt = cipher.encrypt;
let decrypt = cipher.decrypt;

let rank = require("./rank")
let getMostLikely = rank.getMostLikely;

let breaks = require("./breaks");
let bruteForce = breaks.bruteForce;
let letterFreq = breaks.letterFreq;

let plainText = "Jacob Evans is the bomb dont you agree I think he is pretty and nice?";
let shift = 28;
console.log(`Original text is: ${plainText} with a shift of ${shift}`);

console.log("\n------------------------------------------\n");

let encryptedText = encrypt(plainText, shift);
console.log(`Encryped text is: ${encryptedText} with a shift of ${shift}`);
let decryptedText = decrypt(encryptedText, shift);
console.log(`Uncrypted text is: ${decryptedText} with a shift of ${-1 * shift}`);

console.log("\n------------------------------------------\n");

let possibleResults = bruteForce(encryptedText);
console.log(`By brute forcing there are ${possibleResults.length} possible solutions`);
let mostLikelySolution = getMostLikely(possibleResults)
console.log(`The most likely solution is ${mostLikelySolution}`);

console.log("\n------------------------------------------\n");

let solution = letterFreq(encryptedText);
console.log(`Using letter frequency ${solution.text} was the text with a shift of ${solution.shift}`);
