Set of utility algorithms created in javascript.

### Readable time

Converts time in seconds to a human readable format (HH:MM:SS), padded to 2 digits.
If input exceeds day duration, it wraps back to 00 hours at the 24 mark.

_Examples:_

```javascript
readableTime(60) => "00:01:00"
readableTime(592318) => "20:31:58"
readableTime(604800) => "00:00:00"
```

### Fraction reducer

Function that reduces fractions to their simplest form.

_Examples:_

```javascript
fractionReducer([45, 120]) => [3, 8]
```

### How many smaller

Given an array, returns an array containing at each index the amount of numbers that are smaller than it to the right

_Examples:_

```javascript
smaller([5, 4, 3, 2, 1]) => [4, 3, 2, 1, 0]
smaller([1, 2, 0]) => [1, 1, 0]
```

### Sum of perfect squares

Given an integer, finds the length of the smallest list of perfect squares which add up to the number.

_Examples:_

```javascript
minSquares(17) => 2 // 17 = 16 + 1
minSquares(15) => 4 // 15 = 9 + 4 + 1 + 1
minSquares(16) => 1 // 16 = 16
```

### Move zeros

Given an array, returns an array with all zeros moved to the end, preserving the order of all the other elements.

_Examples:_

```javascript
moveZeros([false,1,0,1,2,0,1,3,"a"]) => [false,1,1,2,1,3,"a",0,0]
```
