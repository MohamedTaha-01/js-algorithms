Set of various utility algorithms created in javascript for learning purposes.

### Readable time

Converts time in seconds to a human readable format (HH:MM:SS), padded to 2 digits.
If input exceeds day duration, it wraps back to 00 hours at the 24 mark.

_Examples:_

```javascript
readableTime(60) => "00:01:00"
readableTime(592318) => "20:31:58"
readableTime(604800) => "00:00:00"
```

### Naruto sort

Given a matrix, returns an array with the elements arranged from outermost elements to the middle element, traveling clockwise from the top left, following a spiral form.

_Examples:_

```javascript
  naruto([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ]) => [1, 2, 3, 4, 5, 6, 7, 8, 9]
  naruto([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]) => [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
```

### Paint bucket fill

Given a matrix `matrix`, a pair of coordinates `coords` ([x,y]) and a number `fill`, it changes the value of the given position in the matrix to fill and propagates the changes recursively through the horizontal, vertical and diagonal axis to all the neighbors that share the same value with the original point.

_Examples:_

```javascript
bucketPaint(matrix, [2,1], 4)
[[2,2,3,3],             [[2,2,4,4],
 [2,2,3,3],     =>       [2,2,4,4],
 [2,2,2,2],              [2,2,2,2],
 [2,2,2,2]]              [2,2,2,2]]

bucketPaint(matrix, [2,1], 4)
 [[2,2,3,3],             [[2,2,4,4],
 [2,2,3,3],     =>       [2,2,4,4],
 [2,3,2,2],              [2,4,2,2],
 [2,3,2,2]]              [2,4,2,2]]
```

### Roman numeral decoder

Given a roman numeral as a string, returns its value as a numeric decimal integer.

_Examples:_

```javascript
romanDecode("XXVII") => 27
romanDecode("MMMCMXCIX") => 3999
romanDecode("MMMMCMXCIX") => 4999
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

### Rankify

Given an array, returns an array where each element represents the rank of the corresponding value in the original array. The highest value receives a rank of 1, the second highest receives a rank of 2, and so on. For values that are tied, the same rank is assigned to all.

```javascript
rankify([9,3,6,10]) => [2,4,3,1]
rankify([3,3,3,3,3,5,1]) => [2,2,2,2,2,1,3]
```
