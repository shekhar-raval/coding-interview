const intToRoman = (num) => {
  let integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let pointer = 0;
  let res = ''
  while (num > 0) {
    if (num >= integer[pointer]) {
      res += roman[pointer];
      num -= integer[pointer];
    } else {
      pointer++
    }
  }
  return res;
}
console.log(intToRoman(6));
