const fs = require('fs');
const readlineSync = require('readline-sync');

// Function to write or append to a file synchronously
function writeToFileSync(fileName, message) {
    try {
        fs.appendFileSync(fileName, message + '\n');
        console.log('Nachricht erfolgreich hinzugefügt.');
    } catch (err) {
        console.error('Fehler beim Schreiben in die Datei:', err);
    }
}

// Prompt user for file name and message
const fileName = readlineSync.question('Gib den Namen der Datei ein: ');
const message = readlineSync.question('Gib die Nachricht ein, die in die Datei geschrieben werden soll: ');

writeToFileSync(fileName, message);
