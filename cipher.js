let cipher = (text, shift) => {
  text = text.toLowerCase();
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let output = "";

  for (var i = 0; i < text.length; i++) {
    let index = alpha.indexOf(text[i]);

    if (index === -1) {
      output += text[i];
    } else {
      index += shift;
      index = index % alpha.length;
      if (index < 0) {
        index += alpha.length;
      }
      output += alpha[index];
    }
    
  }
  return output;
}

let encrypt = (text, shift) => cipher(text, shift);
let decrypt = (text, shift) => cipher(text, -1 * shift);

module.exports = {
  cipher,
  encrypt,
  decrypt
}
