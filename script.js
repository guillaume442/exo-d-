function lancerDe() {
  // Génère un nombre aléatoire entre 1 et 6
  const nombreAleatoire = Math.floor(Math.random() * 6) + 1;

  // Change la source de l'image en fonction du résultat
  const imageDe = document.querySelector("img");
  imageDe.src = `images/de_${nombreAleatoire}.png`;
}

// Lance le dé au chargement de la page
window.onload = lancerDe;
