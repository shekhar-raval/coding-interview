/**
 * Find Target sum
 * Time Complexity O(n)
 * Space Complexity O(n)
 * @param {Array} array 
 * @param {number} targetSum 
 */
const twoNumberSum1 = (array, targetSum) => {
  if (!array.length) {
    return []
  }
  const hash = {}
  for (const num of array) {
    const complement = targetSum - num;
    if (complement in hash) {
      return [complement, num]
    }
    hash[num] = true;
  }
  return []
};

/**
 * Find Target sum
 * Time Complexity O(nlog(n))
 * Space Complexity O(n)
 * @param {Array} array 
 * @param {number} targetSum 
 */
const twoNumberSum2 = (array, targetSum) => {
  array = array.sort((a, b) => a - b);
  let leftPointer = 0;
  let rigthPointer = array.length - 1;
  while (leftPointer < rigthPointer) {
    const sum = array[leftPointer] + array[rigthPointer];
    if (sum === targetSum) {
      return [array[leftPointer], array[rigthPointer]]
    } else if (sum > targetSum) {
      rigthPointer--
    } else if (sum < targetSum) {
      leftPointer++
    }
  }
  return []
};