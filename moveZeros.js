function moveZeros(arr) {
  if (!arr || !Array.isArray(arr)) return null

  const filteredArr = arr.filter((el) => el !== 0)
  const zerosArr = new Array(arr.length - filteredArr.length).fill(0)

  return [...filteredArr, ...zerosArr]
}
