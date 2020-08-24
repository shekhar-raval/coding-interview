/**
 * Smallest difference
 * 
 * Time Complexity O(NLog(N) + MLog(M))
 * Space Complexity O(1)
 * 
 * @param {Array} arrayOne 
 * @param {Array} arrayTwo 
 */
const smallestDifference = (arrayOne, arrayTwo) => {
  arrayOne = arrayOne.sort((a, b) => a - b);
  arrayTwo = arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idexTwo = 0;
  let smallestPair = [];
  let smallest = Infinity;
  let current = Infinity;

  while (idexTwo < arrayOne.length && idexTwo < arrayTwo.length) {
    const firstNum = arrayOne[idxOne];
    const secondNum = arrayTwo[idexTwo];
    current = Math.abs((firstNum - secondNum));
    if (firstNum < secondNum) {
      idxOne++;
    } else if (secondNum < firstNum) {
      idexTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}