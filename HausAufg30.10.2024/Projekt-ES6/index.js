// Pakete importieren
// import inspirationalQuotes from 'inspirational-quotes';
import catFacts from 'cat-facts';
import inquirer from 'inquirer';
import boxen from 'boxen';
import chalk from 'chalk';

function showInspirationalQuote() {
    // 1. Hole dir ein zufälliges Zitat
    const quote = inspirationalQuotes.getQuote(); // Zitat abrufen

    // 2. Verwende boxen, um das Zitat stilvoll darzustellen
    // 3. Färbe das Zitat mit chalk
    const quoteBox = boxen(chalk.green(quote.text), {
        padding: 1,
        margin: 1,
        borderStyle: 'double'
    });
    
    console.log(quoteBox); // Zitat in einer Box anzeigen
}

async function askForNewQuote() {
    const answers = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'getQuote',
            message: 'Möchtest du ein inspirierendes Zitat sehen?',
            default: true,
        },
    ]);

    // 1. Wenn der Benutzer "Ja" wählt, zeige ein Zitat an
    // 2. Wenn der Benutzer "Nein" wählt, beende das Programm
    if (answers.getQuote) {
        showInspirationalQuote(); // Zitat anzeigen
        await askForNewQuote(); // Fragt erneut, ob ein weiteres Zitat angezeigt werden soll
    } else {
        console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
        process.exit(0); // Programm beenden
    }
}

async function main() {
    // 1. Begrüße den Benutzer mit einer farbigen Nachricht
    console.log(chalk.blue('Willkommen zu deinem inspirierenden Zitat-Tool!'));
    await askForNewQuote(); // Starte die Benutzerinteraktion
}

// Hauptfunktion aufrufen
main();
