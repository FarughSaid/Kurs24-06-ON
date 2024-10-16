// 1. Erstelle ein 2D-Array, das eine 3x3-Matrix repräsentiert, gefüllt mit den Zahlen 1 bis 9.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Ursprüngliche Matrix:");
console.log(matrix);

// 2. Schreibe eine Funktion, die die Diagonalsumme der Matrix (von oben links nach unten rechts) berechnet.
function diagonalsumme(matrix) {
    let summe = 0;
    for (let i = 0; i < matrix.length; i++) {
        summe += matrix[i][i]; // Diagonalelemente (matrix[0][0], matrix[1][1], matrix[2][2])
    }
    return summe;
}

let diagonaleSumme = diagonalsumme(matrix);
console.log("Diagonalsumme der Matrix:", diagonaleSumme);

// 3. Verwandle die Matrix in eine 3x3 Matrix mit Nullen in den Ecken.
function setzeNullenInDieEcken(matrix) {
    // Setze Nullen in die Ecken der Matrix.
    matrix[0][0] = 0; // Oben links
    matrix[0][2] = 0; // Oben rechts
    matrix[2][0] = 0; // Unten links
    matrix[2][2] = 0; // Unten rechts
}

setzeNullenInDieEcken(matrix);
console.log("Matrix nach dem Setzen von Nullen in die Ecken:");
console.log(matrix);
