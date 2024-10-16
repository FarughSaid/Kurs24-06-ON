// 1. Erstelle ein Array mit den Namen von fünf verschiedenen Städten.
let städte = ["Berlin", "München", "Hamburg", "Frankfurt", "Köln"];

// 2. Iteriere über das Array und gib jede Stadt in Großbuchstaben aus.
console.log("Städte in Großbuchstaben:");
for (let i = 0; i < städte.length; i++) {
    console.log(städte[i].toUpperCase());
}

// 3. Erstelle ein neues Array, das die Anzahl der Buchstaben in jedem Stadtnamen speichert.
let buchstabenAnzahl = [];
for (let i = 0; i < städte.length; i++) {
    buchstabenAnzahl.push(städte[i].length); // Anzahl der Buchstaben in jedem Stadtnamen hinzufügen
}

console.log("Anzahl der Buchstaben in jedem Stadtnamen:", buchstabenAnzahl);
