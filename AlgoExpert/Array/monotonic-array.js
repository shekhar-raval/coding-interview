/**
 * Wether array is monotonic
 * 
 * Time Complexity O(n)
 * Space Complexity O(1)
 * 
 * Both Cases
 * 
 */
const isMonotonic1 = (array) => {
  let nonIncreasing = false;
  let nonDecreasing = false;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) nonDecreasing = false;
    if (array[i] < array[i - 1]) nonIncreasing = false;
  }
  return nonIncreasing || nonDecreasing;
}


const isMonotonic2 = (array) => {
  if (array.length === 2) return true;
  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1]
      continue;
    }
    if (breakDirection(direction, array[i - 1], array[i])) {
      break;
    }
  }
}

function breakDirection(direction, prev, current) {
  let diff = current - prev;
  if (direction > 0) {
    return diff < 0;
  }
  return diff > 0
}