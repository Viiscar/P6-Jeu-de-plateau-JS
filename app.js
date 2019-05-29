$(function() {

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
    grille.greyCells();

    //check
    perso1.checkPosition (perso2)

    //Insertion des personnages
    grille.insertPlayer();
 

    //Insertion des armes    
    grille.insertWeapon();

    //Déplacement des personnages
    $(document).keydown(function(e){
      if (e.which == 39) {//Droite
        $("#" + perso1.pos).removeClass("perso1");
        perso1.position = parseInt(perso1.pos) + 1;
        $("#" + perso1.pos).addClass("perso1"); 
        
      }
      if (e.which == 37) {//Gauche
        $("#" + perso1.pos).removeClass("perso1");
        perso1.position = parseInt(perso1.pos) - 1;
        $("#" + perso1.pos).addClass("perso1");
       
      }
      if (e.which == 38) {//Haut



        $("#" + perso1.pos).removeClass("perso1");
        perso1.position = parseInt(perso1.pos) - 10;
        $("#" + perso1.pos).addClass("perso1");
       
      }
      if (e.which == 40) {//Bas
        $("#" + perso1.pos).removeClass("perso1");
        perso1.position = parseInt(perso1.pos) + 10;
        $("#" + perso1.pos).addClass("perso1");
        
      }
      //Le changement d'arme n'opère pas
      grille.weapons.forEach(function(weapon){
        for (i=0; i < grille.personnages.length; i++){

          if (grille.personnages[i].position == weapon.position) {
            console.log(grille.personnages[i].weapon);
            console.log(weapon);
            grille.personnages[i].weapon = weapon;
            console.log(weapon);
            this.weapon = grille.personnages[i].weapon; //noooo
            console.log(weapon);
            console.log(grille.personnages[i].weapon);
            // $("#" + grille.personnages[i].position).removeClass();
            let test = $("#" + weapon.position).removeAttr("style");
            console.log(weapon.position);
            let previousWeapon = grille.personnages[i].weapon.visual;
            $(".perso"+ (i+1)).css("background-image", weapon.visual + ', url("perso" + (i+1) + ".png")');


            $("#" + weapon.position).css("background-image",previousWeapon);
            
          }
        }

      });
    });

    

    // Tour des personnages l'un après l'autre
// for (let i = 0; i < grille.personnages.length; i++) { //personnges not defined
//   // 3 tours par personnage
//   for (let j = 0; j < 3; j++) {

     
//           //Si le personnage apparait sur une arme il la récupère

          
//           if (e.which == 13) {//Entrée
//             j = 0;
            
//           }
//         });
//   }
// }

  });


// // function playerMove (player) {

//         //Si perso arrive sur mur retour a la case départ
//         if ($(".perso").hasClass("wall")){
//           this.personnages.position = previousPosition;
//         }
  

// // }




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
// 1) Les personnages ne doivent pas apparaitre cote a cote == > Done
// 2) Les personnages ne peuvent pas apparaitre sur des cases grises
// 3) La premiere arme doit apparaitre sur les joueurs == > Done
// 4) Arme récoltée par le joueur
// 5) Joueur peut se déplacer de 3 cases par tour



