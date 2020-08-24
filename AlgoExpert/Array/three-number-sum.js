/**
 * Triplate of all 3 numbers matching target sum
 * 
 * Time Complexity O(n^2)
 * Space Complexity O(n)
 * 
 * @param {Array} array 
 * @param {number} targetSum 
 */
const threeNumberSum = (array, targetSum) => {
  array = array.sort((a, b) => a - b);
  const triplates = []
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1
    while (left < right) {
      const sum = array[i] + array[left] + array[right];
      if (sum === targetSum) {
        triplates.push([array[i], array[left], array[right]]);
        left++
        right--
      } else if (sum > targetSum) {
        right--
      } else if (sum < targetSum) {
        left++
      }
    }
  }
  return triplates;
}