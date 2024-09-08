function deepClone(obj) {
  let newObj = {}
  for (const key in obj) {
    let value = obj[key]

    if (Array.isArray(value)) {
      value = value.map((el) => {
        if (el.constructor.name === 'Object') return deepClone(el)
        else return el
      })
    }
    if (value.constructor.name === 'Object') value = deepClone(value)

    newObj[key] = value
  }

  return newObj
}
