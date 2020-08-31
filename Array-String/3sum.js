const threeSum = (array) => {
  const triplates = []
  array = array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.left - 1;
    while (left < right) {
      const sum = array[left] + array[right] + array[i];
      if (sum === 0) {
        triplates.push([array[left], array[right], array[i]]);
        while (array[left + 1] === array[left]) left++;
        while (array[right - 1] === array[right]) right--;
        left++
        right++
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
}