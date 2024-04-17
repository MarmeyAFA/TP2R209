function randomChoice() {
    const choices = ['pierre', 'feuille', 'ciseaux'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function win(choice, randomChoice) {
    if (choice === randomChoice) {
      return 'Egalité!';
    } else if (
      (choice === 'pierre' && randomChoice === 'ciseaux') ||
      (choice === 'feuille' && randomChoice === 'pierre') ||
      (choice === 'ciseaux' && randomChoice === 'feuille')
    ) {
      document.getElementById("resultat").innerHTML = 
        "Résultat: Vous avez Gagné";
    } else {
        document.getElementById("resultat").innerHTML = 
        "Résultat: Vous avez Gagné";
    }
  }