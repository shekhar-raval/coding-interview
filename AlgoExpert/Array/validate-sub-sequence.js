/**
 * Validate Subsquence
 * 
 * Solution 1
 * 
 * Time Complexity O(n)
 * Space Complexity O(1)
 * 
 * @param {Array} array 
 * @param {Array} sequence 
 */
const validateSubSquence1 = (array, sequence) => {
  let squencePointer = 0;
  for (const num of array) {
    if (squencePointer === sequence.length) break;
    if (sequence[squencePointer] === num) squencePointer++
  }
  return squencePointer === sequence.length;
}