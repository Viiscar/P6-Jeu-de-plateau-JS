$(function() {

  let jeu = new Jeu(Grille, Perso, Weapon);
  jeu.init();

});


// le combat ne se lance pas à chaque fois
// lorsque le combat est lancé il faut désactiver les touches de direction
//
// defense() et attack() ne fonctionnent pas

// le reswap ne fonctionne pas

// si une arme apparait sur un mur --> bug   --> ok mais dédouble le code

