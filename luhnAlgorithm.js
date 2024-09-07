function luhnAlgorithm(value) {
  let digits = value.toString().split("");

  if (digits.length > 16) return false;

  digits = digits.map((digit) => parseInt(digit));

  if (digits.length % 2 === 0) _doubleDigits(digits, 0);
  else _doubleDigits(digits, 1);

  const sum = digits.reduce((accum, digit) => digit + accum, 0);

  return sum % 10 === 0;
}

const _doubleDigits = (digits, startingIndex) => {
  for (let i = startingIndex; i < digits.length; i = i + 2) {
    let num = digits[i] * 2;
    if (num > 9) num = num - 9;
    digits[i] = num;
  }
};
