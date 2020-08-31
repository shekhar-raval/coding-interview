const threeSumClosest = (nums, target) => {
  if (!nums || nums.length < 3) return;
  nums = nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let low = i + 1;
    let high = nums.length - 1;
    while (low < high) {
      const sum = nums[low] + nums[high] + nums[i];
      if (sum === target) {
        return target;
      } else if (sum > target) {
        high--
      } else if (sum < target) {
        low++
      }
      if (Math.abs(result - target) > Math.abs(sum - target)) {
        result = sum;
      }
    }
  }
  return result;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));