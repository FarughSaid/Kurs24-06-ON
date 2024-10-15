function digitSum(number) {
    let sum = 0; // Initialisiere die Summe auf 0

    // Verwende eine do-while-Schleife, um die Ziffern zu durchlaufen
    do {
        sum += number % 10;  // Addiere die letzte Ziffer zur Summe
        number = Math.floor(number / 10); // Entferne die letzte Ziffer
    } while (number > 0);  // Schleife läuft, solange noch Ziffern vorhanden sind

    return sum; // Gib die berechnete Ziffernsumme zurück
}

console.log(digitSum(248)); // Ausgabe: 14 (2 + 4 + 8)
