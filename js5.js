document.getElementById("btn5").onclick = function() {
    let kielet = document.getElementById("kielet").value;

    if (kielet === "saksa") {
        document.getElementById("teksti5").innerHTML = "Hallo Welt";
    } 
    
    else if (kielet === "englanti") {
        document.getElementById("teksti5").innerHTML = "Hello World";
    } 
    
    else if (kielet === "ruotsi") {
        document.getElementById("teksti5").innerHTML = "Hej Världen";
    }
}