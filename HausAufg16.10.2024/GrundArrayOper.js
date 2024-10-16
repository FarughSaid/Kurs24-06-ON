// 1. Erstelle ein Array mit den Zahlen 1 bis 10.
let zahlenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2. Füge die Zahl 11 am Ende des Arrays hinzu.
zahlenArray.push(11); // Jetzt enthält das Array die Zahlen von 1 bis 11.
console.log("Array nach dem Hinzufügen von 11:", zahlenArray);

// 3. Entferne die erste Zahl aus dem Array.
zahlenArray.shift(); // Entfernt die erste Zahl (1) aus dem Array.
console.log("Array nach dem Entfernen der ersten Zahl:", zahlenArray);

// 4. Finde und gib die Position der Zahl 5 im Array aus.
let positionVon5 = zahlenArray.indexOf(5); // Gibt den Index der Zahl 5 zurück.
console.log("Die Position der Zahl 5 im Array ist:", positionVon5);

// 5. Überprüfe, ob die Zahl 7 im Array enthalten ist.
let istSiebenEnthalten = zahlenArray.includes(7); // Überprüft, ob 7 im Array vorhanden ist.
console.log("Ist die Zahl 7 im Array enthalten?", istSiebenEnthalten);
