// 1. Erstellen Sie ein Set namens besuchteSeiten
let besuchteSeiten = new Set();

// 2. Fügen Sie mindestens fünf Seitennamen zum Set hinzu, wobei zwei Namen dupliziert sein sollten
besuchteSeiten.add('Startseite');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');
besuchteSeiten.add('Startseite'); // Dupliziert
besuchteSeiten.add('Hilfe');
besuchteSeiten.add('Einstellungen'); // Dupliziert

// 3. Geben Sie die Anzahl der eindeutigen Seiten aus
console.log("Anzahl der eindeutigen Seiten:", besuchteSeiten.size);

// 4. Schreiben Sie eine Funktion zeigeSeiten, die alle Seitennamen im Format "Besuchte Seite: [Name]" ausgibt
function zeigeSeiten() {
    besuchteSeiten.forEach(seite => {
        console.log(`Besuchte Seite: [${seite}]`);
    });
}

// Aufruf der Funktion, um die besuchten Seiten anzuzeigen
zeigeSeiten();
