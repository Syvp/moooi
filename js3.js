document.getElementById("btn3").onclick = function() {
    let luku =  parseInt(document.getElementById("moi").value);
    if (luku % 2 == 0) {
        document.getElementById("teksti3").innerHTML = "Luku on parillinen";
    }
    else {
        document.getElementById("teksti3").innerHTML = "Luku on pariton";
    }
}