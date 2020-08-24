/**
 * Move to end can be Anynumber without retaining position
 * 
 * Time Complexity O(n)
 * Space Complexity O(1)
 */

const moveToEnd = (array, toMove) => {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    while (left < right && array[right] === toMove) {
      right--
    }
    if (array[left] === toMove) {
      swapElement(array, left, right);
    }
    left++
  }
}

function swapElement(array, i, j) {
  const temp = array[i];
  array[i] = array[j]
  array[j] = temp;
}

/**
 * Move Number retaining Position
 */
const moveToEnd = (array, toMove) => {
  /**
   * lstPos = 0;
   * 
   * 
   */
}

// Schema.find({ author: req.params.id }).populate('author');