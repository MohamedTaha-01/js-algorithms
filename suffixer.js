function suffixer(suffix) {
  return function (word) {
    return word.concat(suffix)
  }
}
