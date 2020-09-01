const rotateArray = (nums, k) => {
  if (!nums.length) return;
  if (k > nums.length) {
    k = k % nums.length;
  }
  console.log(nums.length, k);
  nums.unshift(...nums.splice(nums.length - k));
}
/**
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 */
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));