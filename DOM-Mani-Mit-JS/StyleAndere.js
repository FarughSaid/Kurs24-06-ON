function zufaelligeFarbe() {
    const zufallsFarbe = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return zufallsFarbe;
}

document.getElementById("farbeBtn").addEventListener("click", function() {
    this.style.backgroundColor = zufaelligeFarbe();
});
