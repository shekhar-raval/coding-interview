const missingNumber = (nums) => {
  let diff = 0;
  for (let i = 0; i < nums.length; i++) diff += nums[i] - i;
  return diff - nums.length;
}

const missingNumber2 = (nums) => {
  const N = nums.length;
  const gaussSum = (N * (N + 1)) / 2;
  let sumOfElements = 0;
  for (const num of nums) {
    sumOfElements += num;
  }
  return gaussSum - sumOfElements;
}
const array = [1, 2, 4, 5, 6, 7, 8]
/**
 * diff = 12;
 * num[0] = 1 i = 0
 * num[1] = 2 i = 1
 * num[2] = 4 i = 2
 * num[3] = 5 i = 3
 * num[4] = 6 i = 4
 * num[5] = 7 i = 5
 * num[6] = 8 i = 6
 */