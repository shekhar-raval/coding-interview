/**
 * Time complexity  O(N)
 * Space complexity O(N)
 */
function longestSubstring(string) {
  const set = new Set();
  let slowPointer = 0;
  let fastPointer = 0;
  let longestSubstringLength = 0;
  for (const char of string) {
    if (!set.has(char)) {
      set.add(char)
      fastPointer++
      longestSubstringLength = Math.max(longestSubstringLength, set.size);
    } else {
      set.delete(string[slowPointer]);
      slowPointer++
    }
  }
  return longestSubstringLength;
}

console.log(longestSubstring('aaa'));