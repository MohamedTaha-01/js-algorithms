const GREEN = "green";
const YELLOW = "yellow";
const GRAY = "gray";

function wordleCheck(guess, wordle) {
  let result = Array(5).fill(GRAY);
  let wordleCharCount = {};

  for (let i = 0; i < 5; i++) {
    if (guess[i] === wordle[i]) result[i] = GREEN;
    else wordleCharCount[wordle[i]] = (wordleCharCount[wordle[i]] || 0) + 1;
  }

  for (let i = 0; i < 5; i++) {
    if (result[i] === GREEN) continue;
    if (wordleCharCount[guess[i]] > 0) {
      result[i] = YELLOW;
      wordleCharCount[guess[i]] -= 1;
    }
  }

  return result;
}
