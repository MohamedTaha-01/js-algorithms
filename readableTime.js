function readableTime(seconds) {
  if (!seconds || seconds < 0) return '00:00:00'

  const CONSTANTS = { DAY: 86400, HOUR: 3600, MINUTE: 60, SECONDS: 1 }
  let division
  let time = { hours: 0, minutes: 0, seconds: 0 }

  if (seconds >= CONSTANTS.DAY) {
    division = _divide(seconds, CONSTANTS.DAY)
    seconds = division.remainder
  }

  division = _divide(seconds, CONSTANTS.HOUR)
  time.hours = Math.floor(division.result).toString().padStart(2, '0')

  division = _divide(division.remainder, CONSTANTS.MINUTE)
  time.minutes = Math.floor(division.result).toString().padStart(2, '0')

  time.seconds = division.remainder.toString().padStart(2, '0')

  return `${time.hours}:${time.minutes}:${time.seconds}`
}

const _divide = (dividend, divisor) => {
  return { result: dividend / divisor, remainder: dividend % divisor }
}
