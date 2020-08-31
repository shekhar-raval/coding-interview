/**
 * Time Complexity O(N)
 * Space Complexity O(1)
 * @param {string} haystack 
 * @param {string} needle 
 */
const implementStr = (haystack, needle) => {
  const haystackLen = haystack.length;
  const needleLen = needle.length;
  if (needleLen == 0) return 0;
  const loopLen = haystackLen - needleLen;
  for (let i = 0; i <= loopLen; i++) {
    let currentString = haystack.slice(i, i + needleLen);
    if (currentString == needle) return i;
  }
  return -1;
}

const implementStrstr = (haystack, needle) => {
  if (needle.length === '') return 0;
  if (needle.length > haystack.length) return 0;
  let i = 0;
  let j = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j
      }
      j++
    } else {
      i -= j;
      j = 0;
    }
    i++
  }
  return -1
}
console.log(implementStrstr("geeksforgeeks", "forgeeks"));
