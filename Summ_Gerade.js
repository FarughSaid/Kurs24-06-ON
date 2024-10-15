function sumEvenNumbersDoWhile() {
    let totalSum = 0; // Initialisiere die Summe auf 0
    let number = 1;   // Starte bei 1

    // Verwende eine do-while-Schleife, um durch die Zahlen zu iterieren
    do {
        // Prüfe, ob die aktuelle Zahl gerade ist
        if (number % 2 === 0) {
            totalSum += number; // Addiere die gerade Zahl zur Summe
        }

        number++; // Erhöhe die Zahl um 1
    } while (number <= 100); // Schleife läuft, solange die Zahl kleiner oder gleich 100 ist

    return totalSum; // Gib die Gesamtsumme zurück+
}

console.log(sumEvenNumbersDoWhile()); // Ausgabe: 2550
