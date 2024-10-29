const fs = require('fs').promises;

async function readAndWrite() {
    try {
        // Reading the content of the file
        const data = await fs.readFile('beispielTextdatei.txt', 'utf8');

        // Modifying the content
        const modifiedData = data.replace('alter Text', 'neuer Text');

        // Writing the modified content back to the file
        await fs.writeFile('beispielTextdatei.txt', modifiedData, 'utf8');

        console.log('Die Datei wurde erfolgreich bearbeitet und gespeichert.');
    } catch (err) {
        console.error('Es gab einen Fehler beim Bearbeiten der Datei:', err);
    }
};

// Execute the function
readAndWrite();
