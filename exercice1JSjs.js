function C_to_Far(c) {
    return  c * 1.8 +32;
}

function afficher() {
    var data = document.getElementById("celsiusInput").value ;
    c = Number(data);
    document.getElementById("resultat").innerHTML = 
        "Température en Fahrenheit : " + C_to_Far(c);
}


function aire_rectangle(l, L) {
    return L*l;
}

function afficher2() {
    var longueur = document.getElementById("longueur").value ;
    L = Number(longueur);
    var largeur = document.getElementById("largeur").value ;
    l = Number(largeur);
    document.getElementById("resultat2").innerHTML = 
        "Aire du rectangle = " + aire_rectangle(l, L);
}
