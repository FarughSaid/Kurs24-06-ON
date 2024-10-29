const fs = require('fs');
const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to write or append to a file asynchronously
function writeToFileAsync(fileName, message) {
    fs.appendFile(fileName, textDatei + '\n', (err) => {
        if (err) {
            console.error('Fehler beim Schreiben in die Datei:', err);
        } else {
            console.log('Nachricht erfolgreich hinzugefügt.');
        }``
        rl.close(); // Close the readline interface
    });
}

// Prompt user for file name and message
rl.question('Gib den Namen der Datei ein: ', (fileName) => {
    rl.question('Gib die Nachricht ein, die in die Datei geschrieben werden soll: ', (message) => {
        writeToFileAsync(fileName, message);
    });
});
