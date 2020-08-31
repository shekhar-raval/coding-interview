/**
 * Time Complexity O(N)
 * Space Complecity O(N)
 * @param {Array} array 
 * @param {number} target 
 */
const twoSum = (array, target) => {
  const set = {}
  for (const num of array) {
    const complement = target - num;
    if (complement in set) {
      return [complement, num];
    } else {
      set[num] = true
    }
  }
  return [];
}