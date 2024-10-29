function factorialFor(n) {
    let result = 1; // Initialize a variable to hold the factorial result, starting at 1

    // Loop through numbers from 1 to n (inclusive)
    for (let i = 1; i <= n; i++) {
        result *= i; // Multiply the current value of result by i to compute the factorial
    }

    return result; // Return the calculated factorial
}

console.log(factorialFor(5)); // Output the result of 5!, expected to be 120

