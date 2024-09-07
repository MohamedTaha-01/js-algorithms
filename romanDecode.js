const ROMAN = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

function romanDecode(str) {
  return str.split("").reduce((accum, symbol, i, arr) => {
    const value = ROMAN[symbol.toUpperCase()];
    if (i < arr.length - 1) {
      if (ROMAN[arr[i + 1].toUpperCase()] > value) return accum - value;
    }
    return accum + value;
  }, 0);
}
