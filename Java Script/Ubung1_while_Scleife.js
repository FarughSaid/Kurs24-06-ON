function sumEvenNumbersWhile() {
    let totalSum = 0; // Initialize a variable to hold the sum of even numbers
    let number = 1;   // Start counting from 1

    // Continue looping while the number is less than or equal to 100
    while (number <= 100) {

        // Check if the current number is even
        if (number % 2 === 0) {
            totalSum += number; // Add the even number to the total sum
        }

        number++; // Increment the number by 1 for the next iteration
    }

    return totalSum; // Return the total sum of even numbers
}

console.log(sumEvenNumbersWhile()); // Output the result, expected to be 2550


