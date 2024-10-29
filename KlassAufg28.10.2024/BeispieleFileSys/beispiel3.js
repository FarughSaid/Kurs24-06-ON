const fs = require('fs');

async function readAndWrite() {
    try {
        // Reading the content of the file
        const data = fs.readFileSync('beispielTextdatei.txt', 'utf8');

        // Modifying the content
        const modifiedData = data.replace(data, 'neuer Text synchrone Ausführung');

        // Writing the modified content back to the file
        fs.writeFileSync('beispielTextdatei.txt', modifiedData, 'utf8');

        console.log('Es war alles erfolgreich');
    } catch (err) {
        console.error('Es gab einen Fehler beim Bearbeiten der Datei:', err);
    }
};

// Execute the function
readAndWrite();
