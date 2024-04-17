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

function nom_complet(prenom, nom) {
    return prenom + ' ' + nom;
}

function afficher3() {
    var data_prenom = document.getElementById("prenom").value ;
    prenom = data_prenom
    var data_nom = document.getElementById("nom").value ;
    nom = data_nom
    document.getElementById("resultat3").innerHTML = 
        "Nom complet : " + nom_complet(prenom, nom);
}

function taxe(prix_ht, taux) {
    let TTC = Number(prix_ht)+Number(prix_ht)*(Number(taux)/100);
    let TVA = Number(prix_ht)*(Number(taux)/100);
    return ["Prix HT : "+ prix_ht, " Montant de la TVA : " + TVA," Prix TTC : "+ TTC];
    
}

function afficher4() {
    var data_TVA = document.getElementById("taux").value ;
    taux = data_TVA
    var data_HT = document.getElementById("prix_ht").value ;
    prix_ht = data_HT
    document.getElementById("resultat4").innerHTML = taxe(prix_ht, taux);
}