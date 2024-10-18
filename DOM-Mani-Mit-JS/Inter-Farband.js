let box = document.querySelector(".box");

box.addEventListener("mouseover", function() {
    this.style.backgroundColor = "green";
});

box.addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightgrey";
});

