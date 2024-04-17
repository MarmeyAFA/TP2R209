function C_to_Far(c) {
    return  c * 1.8 +32;
}

function afficher() {
    var data = document.getElementById("celsiusInput").value ;
    c = Number(data);
    document.getElementById("resultat").innerHTML = 
        "Température en Fahrenheit : " + C_to_Far(c);
}

