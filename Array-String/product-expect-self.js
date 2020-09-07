const productExpectSelf = (nums) => {
  const solutionArray = [1]
  const len = nums.length;

  for (let i = 1; i < len; ++i) {
    solutionArray[i] = nums[i - 1] * solutionArray[i - 1];
  }
  let rightProducts = 1;

  for (let i = len - 1; i >= 0; --i) {
    solutionArray[i] = solutionArray[i] * rightProducts
    rightProducts = nums[i] * rightProducts;
  }
  return solutionArray
}

const productExpectSelf2 = (nums) => {
  const length = nums.length;
  const left_products = [1];
  const right_products = [];
  const output_array = [];
  right_products[length - 1] = 1
  for (let i = 1; i < length; i++) {
    output_array[i] = nums[i - 1] * left_products[i - 1];
  }
  for (let i = length - 2; i >= 0; i--) {
    right_products[i] = nums[i + 1] * right_products[i + 1];
  }
  for (let i = 0; i < length; i++) {
    output_array[i] = left_products[i] * right_products[i];
  }
  return output_array;
}

console.log(productExpectSelf([1, 2, 3, 4]));
