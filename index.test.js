// ---Unit Tests---

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
expect concatOdds([3, 'a', true], [9, 'b', 1, 1, 4, 15, -1]) to be ([-1, 1, 3, 9, 15])sh


// ---Functional Tests---

// Shopping Cart Checkout

// If guest user  
    // -- Test that user can proceed to cart without being logged in
    // -- Test that user is prompted to login or create account when proceeding to checkout
    // -- Test that user can checkout successfully after logging in or creating 
    // -- Test that user receives order confirmation email after submitting order

// If logged-in user
    // -- Test that user is not prompted to log in again when checking out
    // -- Test that user can checkout successfully

// If cart is empty when attempting to checkout
    // -- throw error message saying "cart is empty"
    // -- redirect back to shopping, and offer suggestions of popular items

// Step-by-step checkout
    // -- Test that user is guided through the following in order:
    //      --Shipping info
    //      --Shipping method
    //      --Order summary
    //      --Payment info
    //      --Confirm payment

    
