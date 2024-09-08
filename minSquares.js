function minSquares(n) {
  let result = 0
  while (n > 0) {
    n = n - Math.pow(Math.floor(Math.sqrt(n)), 2)
    result++
  }
  return result
}
