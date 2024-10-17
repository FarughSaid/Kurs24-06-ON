// 1. Erstellen Sie eine Map namens benutzerVerwaltung
let benutzerVerwaltung = new Map();

// 2. Fügen Sie mindestens drei Benutzer zur Map hinzu
benutzerVerwaltung.set('benutzer123', { email: 'benutzer123@example.com', rolle: 'Admin' });
benutzerVerwaltung.set('benutzer456', { email: 'benutzer456@example.com', rolle: 'User' });
benutzerVerwaltung.set('benutzer789', { email: 'benutzer789@example.com', rolle: 'Gast' });

// 3. Erstellen Sie eine Funktion zeigeBenutzer
function zeigeBenutzer() {
    benutzerVerwaltung.forEach((details, benutzername) => {
        console.log(`${benutzername}: ${details.email}, Rolle: ${details.rolle}`);
    });
}

// Aufruf der Funktion, um die Benutzer und deren Details anzuzeigen
zeigeBenutzer();
