document.getElementById("ueberpruefenBtn").addEventListener("click", function() {
    let benutzerZahl = parseInt(document.getElementById("benutzerZahl").value);
    let zufallsZahl = Math.floor(Math.random() * 10) + 1;

    let ergebnisText = (benutzerZahl === zufallsZahl) 
        ? "Richtig geraten!" 
        : `Falsch geraten! Die Zahl war ${zufallsZahl}`;

    document.getElementById("ergebnis").textContent = ergebnisText;
});
