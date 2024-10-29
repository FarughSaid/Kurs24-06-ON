// Wie haben wir bisher Arrays angelegt?

// Ein leeres Array
const leeresArray = [];

// Ein einfaches Zahlen-array
// Array hat eine Länge von 5
// Indizes: 0 - 4
const Zahlenarray = [1, 2, 3, 4, 5];

// Ein einfaches String-Array
const namen = ["ahmet", "brin", "steven", "patrick"];

// Auswahl eines beliebigen Elements aus einem Array.
console.log(namen[0]); // ahmet
console.log(namen[1]); // brin
console.log(Zahlenarray[3]); // 4

// Befüllen von Arrays 
namen.push("marcel");
Zahlenarray.push(6);
leeresArray.push(6);
namen.push("iman", "jeffery", "markus", "katharina");

console.log(namen);       // Ausgabe des namen-Arrays
console.log(Zahlenarray); // Ausgabe des Zahlenarrays
console.log(leeresArray); // Ausgabe des leeren Arrays

// Entfernen des letzten Elements aus einem Array 
namen.pop(); // entfernt "katharina"
Zahlenarray.pop(); // entfernt das letzte Element aus Zahlenarray
leeresArray.pop(); // entfernt das letzte Element aus leeresArray

console.log(namen);       // Ausgabe des aktualisierten namen-Arrays
console.log(Zahlenarray); // Ausgabe des aktualisierten Zahlenarrays
console.log(leeresArray); // Ausgabe des aktualisierten leeresArray

// Splice kann element in einem Array entfernen.
// Es solten immmer Start und enwerte angegeben werden.
// Unshift fuegt elemente an den Anfang eines Array hinzu.

namen.unshift("alper", "stefan", "patrick");
console.log(namen);


// shift
namen.shift("patrick");
console.log(namen);

// CALLBACKS
// soll die elemente eines Array einzeln ausgeben.
namen.forEach(namen => {
    console.log(namen);

});

// Manipulation
let sliceNamen = namen.slice(2, 5);
console.log(namen);