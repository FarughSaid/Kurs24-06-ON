const array = [10, 23, 35, 47, 52, 66, 71, 88, 90];
const threshold = 50;

function countAboveThresholdFor(arr, threshold) {
    let count = 0; // Initialisiere Zähler auf 0

    // Durchlaufe das Array mit einer for-Schleife
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            count++; // Erhöhe den Zähler, wenn das Element größer als der Schwellenwert ist
        }
    }

    return count; // Gib die Anzahl zurück
}

console.log(countAboveThresholdFor(array, threshold)); // Ausgabe: 5


function countAboveThresholdWhile(arr, threshold) {
    let count = 0;  // Initialisiere Zähler auf 0
    let i = 0;      // Starte bei Index 0

    // Schleife läuft, solange i kleiner als die Array-Länge ist
    while (i < arr.length) {
        if (arr[i] > threshold) {
            count++; // Erhöhe den Zähler, wenn das Element größer als der Schwellenwert ist
        }
        i++; // Erhöhe den Index
    }

    return count; // Gib die Anzahl zurück
}

console.log(countAboveThresholdWhile(array, threshold)); // Ausgabe: 5

function countAboveThresholdDoWhile(arr, threshold) {
    let count = 0;  // Initialisiere Zähler auf 0
    let i = 0;      // Starte bei Index 0

    // Führe die Schleife aus, bis alle Elemente durchlaufen sind
    do {
        if (arr[i] > threshold) {
            count++; // Erhöhe den Zähler, wenn das Element größer als der Schwellenwert ist
        }
        i++; // Erhöhe den Index
    } while (i < arr.length); // Bedingung: solange i kleiner als die Array-Länge ist

    return count; // Gib die Anzahl zurück
}

console.log(countAboveThresholdDoWhile(array, threshold)); // Ausgabe: 5


