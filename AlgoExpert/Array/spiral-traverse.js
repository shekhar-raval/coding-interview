/**
 * Spiral Traversal
 * 
 * Time Complexity O(N) - Where N is no of element in 2d Array
 * Space Complexity O(N) - Where N is no of element in 2d Array
 * @param {Array} array 
 */
const spiralTraverse = (array) => {
  const results = [];
  let startRow = 0, endRow = array.length - 1;
  let startCol = 0, endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      results.push(array[startRow][col])
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      results.push(array[row][endCol]);
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      results.push(array[endRow][col])
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      results.push(array[row][startCol])
    }
    startRow++
    endRow--
    startCol++
    endCol--
  }
  return results;
}

console.log(spiralTraverse([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]));
console.log(spiralTraverse([[1, 2, 3, 4], [10, 11, 12, 5], [9, 8, 7, 6]]))
