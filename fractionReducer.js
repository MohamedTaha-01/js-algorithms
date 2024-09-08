function fractionReducer(frac) {
  if (!frac.length || frac.length > 2) return
  if (frac.some((el) => el < 1)) return

  let divider = Math.min(...frac)

  while (frac[0] % divider !== 0 || frac[1] % divider !== 0) {
    divider--
  }

  return frac.map((el) => el / divider)
}
