// quote.js

// Beispiel für einen eigenen Modul-Export
export function showInspirationalQuote() {
    const quotes = [
        "Die einzige Grenze für die Verwirklichung von morgen ist unsere Zweifel von heute.",
        "Tu es oder tu es nicht. Es gibt kein Versuchen.",
        "Der beste Weg, die Zukunft vorherzusagen, besteht darin, sie zu erschaffen."
    ];

    // Zufälliges Zitat auswählen
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomIndex]);
}
