let lista = [];

document.getElementById("btn1").onclick = function() {
    for (let i = 1; i <= 3; i++) {
        let numero = document.getElementById("n" + i).value;
        lista.push(numero);
        lista.sort(function(a, b){return a-b});
    }
    naytaa();
}

function naytaa() {
    let tulos = lista;
    document.getElementById("teksti").innerHTML = "Numerosi suuruusjärjestyksessä olivat: " + tulos;
}