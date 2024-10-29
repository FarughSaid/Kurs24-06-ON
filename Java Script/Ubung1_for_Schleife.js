function sumEvenNumbersFor() {
    let totalSum = 0; // Initialize a variable to hold the sum of even numbers

    // Loop through numbers from 1 to 100
    for (let number = 1; number <= 100; number++) {

        // Check if the current number is even
        if (number % 2 === 0) {
            totalSum += number; // Add the even number to the total sum
        }
    }

    return totalSum; // Return the total sum of even numbers
}

console.log(sumEvenNumbersFor()); // Output the result, expected to be 2550

