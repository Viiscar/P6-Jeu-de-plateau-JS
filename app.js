$(function() {

  let jeu = new Jeu(Grille, Perso, Weapon);
  jeu.init();

});

//relancer le jeu à la fin serait cool

// une fois que le personnages est KO empécher les touches

// tour par tour bloqué à cause du listner

// le combat ne se lance pas à chaque fois

// le reswap ne fonctionne pas

// si une arme apparait sur un mur --> bug   --> ok mais dédouble le code

// class wall weapon