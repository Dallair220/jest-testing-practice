function shiftChar(char, shiftFactor) {
  let code = char.charCodeAt(0) + shiftFactor;
  if (code > 122) code -= 26; // wrapping z to a

  return String.fromCharCode(code);
}

export default function caesarCipher(text, shiftFactor) {
  let shifted = '';

  [...text].forEach((char) => {
    shifted += shiftChar(char, shiftFactor);
  });

  return shifted;
}
