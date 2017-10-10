let cipher = require("../cipher.js");
let encrypt = cipher.encrypt;
let decrypt = cipher.decrypt;

let bruteForce = (text) => {
  let solutions = [];
  for (let i = 1; i <= 25; i++) {
    solutions.push(decrypt(text, i * -1));
  }
  return solutions;
};

module.exports = bruteForce;
