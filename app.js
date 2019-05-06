$(function() {
    // Insérer le code jQuery ici

    //Création d'armes
    let weapon0 = new Weapon("Sticky",'url("weapon0.png")', 10);
    let weapon1 = new Weapon("Stalker",'url("weapon1.png")', 12);
    let weapon2 = new Weapon("Tracker",'url("weapon2.png")', 14);
    let weapon3 = new Weapon("Hunter",'url("weapon3.png")', 16);
    let weapon4 = new Weapon("Exterminator",'url("weapon4.png")', 20);
    
    //Création de personages
    let perso1 = new Perso("Joueur 1", 'url("perso4.png")', weapon0);
    let perso2 = new Perso("Joueur 2", 'url("perso2.png")', weapon0);

    //Création de la grille du plateau
    let grille = new Grille(10,10, [perso1, perso2], [weapon1, weapon2, weapon3, weapon4]);
    grille.createGrille();
    // createGrille(10,10);

    //Insertion des cases grises
    greyCells(20, 'url("grey.png")');



    //check
    // perso1.checkPosition (perso2)    faire un switch case

    //Insertion des personnages
    grille.insertPlayer();
 

    //Insertion des armes    
    weaponPosition(weapon0);
    weaponPosition(weapon1);
    weaponPosition(weapon2);
    weaponPosition(weapon3);
    weaponPosition(weapon4);

    //Déplacement des personnages
    playerMove (perso1);

  });




//   case vide ou grise
function greyCells (nombredeCases, color) {

  for (i=0; i < nombredeCases; i++) {
    let cell = Math.floor(Math.random() * 99);
    $("#" + cell).css("background-image", color);

  }

};




function playerMove (player) {

  // Joueur peut se déplacer de 3 cases par tour
  if (player.position > player.position + 3) {
    player.position = player.position;

  }

  //Arme récoltée par le joueur
  if (player.position === weapon0.position || weapon1.position || weapon2.position || weapon3.position || weapon4.position) {
    player.weapon = this.weapon;
    // player.weapon.position = player.position; weapon undifined

  }

  //Déplacement du personage en fonction de la touche appuyée
  $(document).keydown(function(e){
    if (e.which == 39) {//Droite
      player.position = player.position + 1;
      
    }
    if (e.which == 37) {//Gauche
      player.position = player.position - 1;
     
    }
    if (e.which == 38) {//Haut
      player.position = player.position - 10;
     
    }
    if (e.which == 40) {//Bas
      player.position = player.position + 10;
      
    }
  });

}




function weaponPosition (weapon) {
  // weapon0.position = perso1.position && perso2.position; // n'apparait pas
  $("#" + weapon.position).css("background-image", weapon.visual).css("background-repeat", "no-repeat").css("background-position", "center center");
  
}

function createGrille(hauteur,largeur) {
  let table = $("<table></table>");

  for (i = 0; i < hauteur; i++) {
    // creation column
    let line = $("<tr></tr>");

    for (j = 0; j < largeur; j++) {
    // creation ligne
      let column = $("<td id=" + i+j + "></td>");
      $(line).append(column)
      $(table).append(line);
    }
  };
  
  $("#plateau").append(table);

}

//Liste de choses à améliorer
// 1) Les personnages ne doivent pas apparaitre cote a cote
// 2) Les personnages ne peuvent pas apparaitre sur des cases grises
// 3) La premiere arme doit apparaitre sur les joueurs
// 4) Arme récoltée par le joueur
// 5) Joueur peut se déplacer de 3 cases par tour



