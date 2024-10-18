let boxen = document.getElementsByClassName("box");

for (let i = 0; i < boxen.length; i++) {
    boxen[i].addEventListener("click", function() {
        for (let j = 0; j < boxen.length; j++) {
            boxen[j].style.backgroundColor = "blue";
        }
    });
}
