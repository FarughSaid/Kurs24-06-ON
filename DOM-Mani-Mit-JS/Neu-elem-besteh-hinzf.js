let ul = document.getElementById("liste");
let neuesItem = document.createElement("li");
neuesItem.textContent = "Neues Item";
ul.insertBefore(neuesItem, document.getElementById("item1"));
