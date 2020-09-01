const rotateImage = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      const temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
  matrix = matrix.map((arr) => arr.reverse());
  return matrix;
};
console.log(rotateImage(matrix)); 
