/**
 * O(N) Time 
 * O(1) Space
 */
function stringToInteger(str) {
  str = str.replace(/^\s+/, ''); // remove leading spaces
  let num = str.match(/^[\+\-]?\d+/); // find a match
  console.log(num);
  if (!num) return 0;
  return Math.min(Math.max(+num[0], Math.pow(2, 31) * -1), Math.pow(2, 31) - 1);
}

function stringToInteger(str) {
  let ans = parseInt(str);
  if (isNaN(ans)) {
    return 0;
  }
  if (ans <= -2147483648) {
    return -2147483648;
  }
  if (ans >= 2147483647) {
    return 2147483647;
  }
  return ans;
}

console.log(stringToInteger("4193 with words"));