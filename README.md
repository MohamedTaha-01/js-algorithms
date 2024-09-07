Set of utility algorithms created in javascript.

### Readable time

Converts time in seconds to a human readable format (HH:MM:SS), padded to 2 digits.
If input exceeds day duration, it wraps back to 00 hours at the 24 mark.

*Examples:*
``` javascript
readableTime(60) => "00:01:00"
readableTime(592318) => "20:31:58"
readableTime(604800) => "00:00:00"
```

### Fraction reducer
Function that reduces fractions to their simplest form.

*Examples:*
``` javascript
fractionReducer([45, 120]) --> [3, 8]
```
