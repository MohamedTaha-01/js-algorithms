function reverseWords(str) {
  let words = str.split(' ')
  let newStr = ''

  words.forEach((word, i) => {
    let letters = Array.from(word)
    letters.reverse()
    letters = letters.join('')
    if (i !== 0) newStr = newStr.concat(' ')
    newStr = newStr.concat(letters)
  })

  return newStr
}
