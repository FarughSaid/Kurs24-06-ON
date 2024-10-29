function factorialWhile(n) {
    let result = 1; // Initialize a variable to hold the factorial result, starting at 1
    let i = 1;      // Start the counter at 1

    // Continue looping while i is less than or equal to n
    while (i <= n) {
        result *= i; // Multiply the current value of result by i to compute the factorial
        i++;         // Increment i by 1 for the next iteration
    }

    return result; // Return the calculated factorial
}

console.log(factorialWhile(5)); // Output the result of 5!, expected to be 120

