let cipher = require("../cipher.js");
let encrypt = cipher.encrypt;
let decrypt = cipher.decrypt;

let alpha = "abcdefghijklmnopqrstuvwxyz";

let getLargest = (letterFreqDict) => {
  let largest = {value: "", rank: 0};
  for(var key in letterFreqDict) {
    if(letterFreqDict[key] > largest.rank && alpha.indexOf(key) !== -1) {
      largest = {value: key, rank: letterFreqDict[key]};
    }
  }
  return largest;
}

let genLetterFreqDict = (text) => {
  let genAlpha = {};
  for(let i = 0; i < text.length; i++) {
    if(genAlpha[text[i]]) {
      genAlpha[text[i]] += 1;
    } else {
      genAlpha[text[i]] = 1;
    }
  }
  return genAlpha;
}

let getShift = (text) => {
  let letterFreqDict = genLetterFreqDict(text);
  let largest = getLargest(letterFreqDict);
  let eIndex = alpha.indexOf(largest.value);
  if (eIndex > alpha.indexOf("e")) {
    return eIndex - alpha.indexOf("e");
  } else {
    return alpha.indexOf("e") - eIndex;
  }
}

let letterFreq = (text) => {
  let shift = getShift(text);
  return {
    text: decrypt(text, shift),
    shift
  }
}

module.exports = letterFreq;
