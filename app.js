$(function() {

  let jeu = new Jeu(Grille, Perso, Weapon);
  jeu.init();

});

// lorsqu'un perso est sur une arme. Dès que l'autre perso bouge, l'image du premier perso disparait, laissant uniquement son arme.

// le personnage apparait sur les armes