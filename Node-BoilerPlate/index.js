function checkUser() {
    var  name = "John";           // Changed to const since the name is not reassigned
    let age = 25;
    const isStudent = true;

    if (age > 18) {
        console.log(`${name} is an adult.`);
    } else {
        console.log(`${name} is a child.`);
    }

    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    // Removed someunusedVariable, as it was not needed

    return `${name}, Age: ${age}, Student: ${isStudent}`;
}

console.log(checkUser());
