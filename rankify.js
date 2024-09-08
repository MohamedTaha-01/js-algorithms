function rankify(arr) {
  if (!arr.length) return []

  let values = [...arr]

  let result = new Array(values.length).fill(-Infinity)

  let exit = false

  for (let i = 1; !exit; i++) {
    const biggest = Math.max(...values)

    values.forEach((el, index) => {
      if (el === biggest) {
        result[index] = i
        values[index] = -Infinity
      }
    })

    exit = values.every((el) => el === -Infinity)
  }

  return result
}
