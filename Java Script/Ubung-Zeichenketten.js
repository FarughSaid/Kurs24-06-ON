// Name und Alter als Variablen speichern
let name = "Max";
let alter = 25;

// Begrüßung ausgeben
let begruessung = "Hallo, " + name + ". Du bist " + alter + " Jahre alt.";
console.log(begruessung);

// Vorname, Nachname und Stadt speichern
let vorname = "Anna";
let nachname = "Müller";
let stadt = "Berlin";

// Vorstellung ausgeben
let vorstellung = `Ich heiße ${vorname} ${nachname} und komme aus ${stadt}.`;
console.log(vorstellung);

// Vollständigen Namen speichern
let vollerName = "  Hans Schmidt  ";

// Namen in Kleinbuchstaben und Großbuchstaben ausgeben
console.log(vollerName.toLowerCase()); // Ausgabe: "  hans schmidt  "
console.log(vollerName.toUpperCase()); // Ausgabe: "  HANS SCHMIDT  "

// Überflüssige Leerzeichen entfernen und Namen ausgeben
let bereinigterName = vollerName.trim();
console.log(bereinigterName); // Ausgabe: "Hans Schmidt"

// Funktion 'begruesse' erstellen
function begruesse(name) {
    return `Willkommen, ${name}!`;
}

// Funktion aufrufen und Ergebnis ausgeben
console.log(begruesse("Lisa")); // Ausgabe: "Willkommen, Lisa!"

// Satz speichern
let satz = "Das Wetter ist schlecht.";

// Wort 'schlecht' durch 'großartig' ersetzen
let neuerSatz = satz.replace("schlecht", "großartig");

// Neuen Satz ausgeben
console.log(neuerSatz); // Ausgabe: "Das Wetter ist großartig."
