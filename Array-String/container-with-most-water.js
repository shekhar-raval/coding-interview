/**
 * Time Complexity O(N)
 * Space Complexity O(1)
 * @param {Array} height 
 * @returns {number} maxArea
 */
const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxarea = 0;
  while (left < right) {
    maxarea = Math.max(maxarea, (Math.min(height[left], height[right]) * (right - left)));
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return maxarea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));