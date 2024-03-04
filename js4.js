document.getElementById("btn4").onclick = function() {
    let luku2 = parseInt(document.getElementById("lol").value);

    if (luku2 < 15) {
        document.getElementById("teksti4").innerHTML = "Saat ajaa polkypyörällä";

    } 
    
    else if (luku2 < 18) {
        document.getElementById("teksti4").innerHTML = "Saat ajaa mopolla";

    } 
    
    else if (luku2 >= 18) {
        document.getElementById("teksti4").innerHTML = "Saat ajaa autolla";
    }
}