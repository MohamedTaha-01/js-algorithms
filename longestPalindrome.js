function longestPalindrome(str) {
  if (!str) return 0

  let result = new Array(str.length).fill(0)

  for (let headIndex = 0; headIndex <= str.length - 1; headIndex++) {
    let headPointer = headIndex
    for (let tailIndex = str.length - 1; tailIndex >= headIndex; tailIndex--) {
      if (str[headPointer] === str[tailIndex]) {
        result[headIndex] = result[headIndex] + 1
        headPointer++
      } else result[headIndex] = 0
    }
  }

  return Math.max(...result)
}
