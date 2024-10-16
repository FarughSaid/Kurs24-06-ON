// 1. Erstelle ein Array mit zufälligen Zahlen zwischen 1 und 100 (mindestens 20 Zahlen).
let zufälligeZahlen = [];
for (let i = 0; i < 20; i++) {
    zufälligeZahlen.push(Math.floor(Math.random() * 100) + 1); // Zufällige Zahl zwischen 1 und 100
}

console.log("Zufällige Zahlen:", zufälligeZahlen);

// 2. Filtern Sie alle geraden Zahlen in einem neuen Array heraus.
let geradeZahlen = zufälligeZahlen.filter(function(zahl) {
    return zahl % 2 === 0; // Nur gerade Zahlen herausfiltern
});

console.log("Gefilterte gerade Zahlen:", geradeZahlen);

// 3. Berechne die Summe aller gefilterten geraden Zahlen.
let summeGeradeZahlen = geradeZahlen.reduce(function(summe, zahl) {
    return summe + zahl;
}, 0); // Startwert der Summe ist 0

console.log("Summe der geraden Zahlen:", summeGeradeZahlen);
