const firstUniqueChar = (string) => {
  let arr = string.split('')
  const charHash = {};
  for (const letter of arr) {
    if (letter in charHash) {
      charHash[letter]++;
    } else {
      charHash[letter] = 1;
    }
  }
  for (let [letter, count] of Object.entries(charHash)) {
    if (count === 1) {
      return arr.indexOf(letter)
    }
  }
}

console.log(firstUniqueChar("leetcode"));