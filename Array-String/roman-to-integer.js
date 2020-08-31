const romanToInt = (roman) => {
  const hasTable = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
  let num = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = hasTable[roman[i]];
    const next = hasTable[roman[i + 1]];
    if (current < next) {
      num -= current;
    } else {
      num += current
    }
  }
  return num;
}
console.log(romanToInt('MCMXCIV'));
