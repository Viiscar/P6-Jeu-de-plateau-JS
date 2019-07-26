$(function() {

  let jeu = new Jeu(Grille, Perso, Weapon);
  jeu.init();

});

// P1 4 tours: je crois que le probleme vient de swapperso

// le combat ne se lance pas à chaque fois

// lorsque le combat est lancé il faut désactiver les touches de direction
//
// faire le tour par tour et enregistrer les actions avant de les lancer

// le reswap ne fonctionne pas

// si une arme apparait sur un mur --> bug   --> ok mais dédouble le code

