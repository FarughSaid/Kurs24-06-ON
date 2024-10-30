// Pakete importieren
import catFacts from 'cat-facts';
import inquirer from 'inquirer';
import boxen from 'boxen';
import chalk from 'chalk';

// Funktion zur Anzeige eines zufälligen Katzenfakts
function showCatFact() {
    const fact = catFacts.random(); // Zufälliger Katzenfakt
    const factBox = boxen(chalk.blue(fact), {
        padding: 1,
        margin: 1,
        borderStyle: 'double'
    });
    console.log(factBox); // Katzenfakt in einer Box anzeigen
}

// Funktion zur Abfrage eines neuen Katzenfakts
async function askForNewCatFact() {
    const answers = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'getCatFact',
            message: 'Möchtest du einen weiteren Katzenfakt sehen?',
            default: true,
        },
    ]);

    if (answers.getCatFact) {
        showCatFact(); // Katzenfakt anzeigen
        await askForNewCatFact(); // Erneut fragen, ob ein weiterer Katzenfakt angezeigt werden soll
    } else {
        console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
        process.exit(0); // Programm beenden
    }
}

// Funktion zur Abfrage des Benutzernamens
async function askForUsername() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Wie heißt du?',
            default: 'Katzenliebhaber',
        },
    ]);
    return answers.username; // Benutzername zurückgeben
}

// Hauptfunktion zur Begrüßung und Starten der Benutzerinteraktion
async function main() {
    const username = await askForUsername(); // Benutzername abfragen
    console.log(chalk.green(`Willkommen, ${username}, zu deinem Katzenfakt-Tool!`));
    await askForNewCatFact(); // Starte die Benutzerinteraktion
}

// Hauptfunktion aufrufen
main();

