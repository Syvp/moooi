let lista2 = [];

document.getElementById("btn2").onclick = function() {
    lista2 = [];
    for (let i = 1; i <= 5; i++) {
        let numero2 = document.getElementById("nn" + i).value;
        lista2.push(numero2);
    }
    lista2.sort(function(a, b) { return a - b; });
    nayta();
}

function nayta() {
    let tulos2 = lista2[lista2.length - 1];
    document.getElementById("teksti2").innerHTML = "Suurin luku oli: " + tulos2;
}