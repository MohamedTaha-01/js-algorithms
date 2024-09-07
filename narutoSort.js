function naruto(m) {
  if (!m.length) return [];
  if (m.length === 1) return m[0];

  let matrix = [...m];

  // top
  let result = matrix.shift();

  // right
  for (let i = 0; i < matrix.length; i++) {
    result.push(matrix[i].pop());
  }

  // bottom
  if (matrix.length) {
    result = result.concat(matrix.pop().reverse());
  }

  // left
  for (let i = matrix.length - 1; i >= 0; i--) {
    result.push(matrix[i].shift());
  }

  return result.concat(naruto(matrix));
}
