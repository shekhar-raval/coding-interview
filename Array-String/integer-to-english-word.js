const LESS_THAN_TWENTY = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
const TENS = ["", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const HUNDREDS = ["Hundred", "Thousand", "Million", "Billion"];
const integrerToWord = (num) => {
  const result = [];
  let commas = 0;
  while (num > 0) {
    let n = num % 1000;
    num = Math.floor(num / 1000);
    let words = [];
    if (n > 99) {
      let hundred = Math.floor(n / 100);
      words.push(LESS_THAN_TWENTY[hundred]);
      words.push(HUNDREDS[0]);
      n = n % 100;
    }
    if (n > 19) {
      words.push(TENS[Math.floor(n / 10) - 1]);
      n = n % 10;
    }
    if (n > 0) {
      words.push(LESS_THAN_TWENTY[n]);
    }
    if (words.length > 0) {
      if (commas > 0) {
        words.push(HUNDREDS[commas])
      }
      result.push(words.join(' '))
    }
    commas++
  }
  return result.reverse().join(' ')
}
console.log(integrerToWord(1114526));