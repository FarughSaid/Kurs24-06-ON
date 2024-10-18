document.getElementById("absendenBtn").addEventListener("click", function() {
    let inputWert = document.getElementById("eingabeText").value;
    let p = document.createElement("p");
    p.textContent = inputWert;
    document.getElementById("ausgabe").appendChild(p);
});
