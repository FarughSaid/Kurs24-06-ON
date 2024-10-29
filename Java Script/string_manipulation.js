// String-Manipulationen

// 1. String-Verkettung (String Concatenation)
var name = "Farugh";  // Using var for variable declaration
var greeting = "Hello";  // Using var for variable declaration

console.log("Willkommen, " + name);  // Concatenation of strings
console.log("Willkommen " + name + ", möchtest du " + greeting + " sagen? ");  // Fixed the grammar

// 2. Template-String
// Backticks `...` allow variable interpolation using ${}
var nachname = "Sayed";  // Using var to declare nachname
var gruss = `Willkommen Herr ${nachname}`;  // Use template string for interpolation
console.log(gruss);

var zahl1 = 5;
var zahl2 = 7;
var erg = zahl1 + zahl2;  // Calculate sum
console.log(`Das Ergebnis ist ${erg}`);  // Use template string for sum
console.log("Das Ergebnis ist " + erg);  // Traditional concatenation

// 3. String-Methoden: Trick to write all in uppercase
var str1 = "            Hello Kurs TEILNEHMER";  // String with leading spaces
var formattedStr = str1.toUpperCase();  // Convert to uppercase
console.log(formattedStr);  // Print the uppercase string

// Apply trim and convert to lowercase
formattedStr = str1.trim().toLowerCase();  // Trim the leading spaces and convert to lowercase
console.log(formattedStr);  // Corrected variable usage to log the correct formatted string

// 4. String Interpolation in Function
function mehrwertSteuerPreis(preis) {
    const steuersatz = 0.19;  // Tax rate remains constant
    var gesamtpreis = preis * (1 + steuersatz);  // Calculate total price with tax
    return `Der Gesamtpreis beträgt: €${gesamtpreis.toFixed(2)}`;  // Use toFixed(2) to round to 2 decimals
}

console.log(mehrwertSteuerPreis(100));  // Example call with price 100

// 5. Verwendung von Replace (Use of Replace)
var text = "Ich habe ein Haustier. Es ist ein Kater. Sein Name ist Gojo";  // Fixed typos in the text
var neuText = text.replace("Gojo", "Baron");  // Corrected 'repalce' to 'replace'
console.log(neuText);  // Output the new text
