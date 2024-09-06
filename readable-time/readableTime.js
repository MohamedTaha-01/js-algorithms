function readableTime(seconds) {
  if (seconds < 0) return;

  const CONSTANTS = { DAY: 86400, HOUR: 3600, MINUTE: 60, SECONDS: 1 };
  let division;
  let time = { hours: 0, minutes: 0, seconds: 0 };

  if (seconds >= CONSTANTS.DAY) {
    division = divide(seconds, CONSTANTS.DAY);
    seconds = division.remainder;
  }

  division = divide(seconds, CONSTANTS.HOUR);
  time.hours = Math.floor(division.result).toString().padStart(2, "0");

  division = divide(division.remainder, CONSTANTS.MINUTE);
  time.minutes = Math.floor(division.result).toString().padStart(2, "0");

  time.seconds = division.remainder.toString().padStart(2, "0");

  return `${time.hours}:${time.minutes}:${time.seconds}`;
}

const divide = (dividend, divisor) => {
  return { result: dividend / divisor, remainder: dividend % divisor };
};

export default readableTime;
