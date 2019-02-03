function repeated_pairs(correlation_matrix, words) {
  let pairs = [];

  for (let i = 1; i < correlation_matrix.length; i++) {
    for (let j = correlation_matrix.length; j > i; j--) {
      if (correlation_matrix[i][j] > bound) {
        pairs.push([words[i], words[j]]);
      }
    }
  }
}
