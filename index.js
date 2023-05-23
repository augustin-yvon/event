// Récupère la date de l'évènement
var dateEvenement = new Date("2023-07-16");

// Fonction pour mettre à jour le minuteur chaque seconde
setInterval(function() {
  // Récupère la date et l'heure actuelles
  var dateActuelle = new Date();

  // Calcule la différence entre la date de l'évènement et la date actuelle en milliseconde
  var difference = dateEvenement - dateActuelle;

  // Calcule les jours, heures, minutes et secondes restantes
  var jours = Math.floor(difference / (1000 * 60 * 60 * 24));
  var heures = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var secondes = Math.floor((difference % (1000 * 60)) / 1000);

  // Ajoute un zéro devant les chiffres inférieurs à 10 en utilisant une opération ternaire : condition ? valeurSiVrai : valeurSiFaux
  jours = jours < 10 ? "0" + jours : jours;
  heures = heures < 10 ? "0" + heures : heures;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  // Affiche chaque valeur dans des élément HTML
  document.getElementById("timer-j").innerHTML = jours
  document.getElementById("timer-h").innerHTML = heures
  document.getElementById("timer-m").innerHTML = minutes
  document.getElementById("timer-s").innerHTML = secondes
}, 1000);