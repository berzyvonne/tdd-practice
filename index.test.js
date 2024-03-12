// Unit Tests

// 1. "Multiplication"
// test multiplication of positive numbers
    expect multiplication(3,4) to be (12);

// test multiplication of negative numbers
    expect multiplication(-3,-4) to be (12);

// test multiplication of mixed numbers
    expect multiplication (-3,4) to be (-12);

// test multiplication by zero
    expect multiplication (0,5) to be (0);


// 2. "concatOdds"
// test should return an array of odd numbers in ascending order
expect concatOdds([3, 2, 1], [9, 1, 1, 2, 15, -1]) to be ([-1, 1, 3]);

// test should handle arrays with multiple occurrences of the same odd number
expect concatOdds([1, 1, 1], [1, 1, 1]) to be ([1]);

// test should handle arrays with no odd numbers
expect concatOdds([2, 6, 8], [2, 4, 4, 10]) to be ([]);

// test should handle arrays with mixed data types
expect concatOdds([3, 'a', true], [9, 'b', 1, 1, 4, 15, -1]) to be ([-1, 1, 3, 9, 15])