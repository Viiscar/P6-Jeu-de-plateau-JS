$(function() {

    //Création d'armes
    let weapon0 = new Weapon("Sticky",'url("weapon0mini.png")', 10);
    let weapon1 = new Weapon("Stalker",'url("weapon1mini.png")', 12);
    let weapon2 = new Weapon("Tracker",'url("weapon2mini.png")', 14);
    let weapon3 = new Weapon("Hunter",'url("weapon3mini.png")', 16);
    let weapon4 = new Weapon("Exterminator",'url("weapon4.png")', 20);
    
    //Création de personages
    let perso1 = new Perso("Joueur 1", 'url("perso1.png")', weapon0);
    let perso2 = new Perso("Joueur 2", 'url("perso2.png")', weapon0);

    console.log(perso1.visu);

    //Création de la grille du plateau
    let grille = new Grille(10,10, [perso1, perso2], [weapon1, weapon2, weapon3, weapon4]);
    grille.createGrille();
    // createGrille(10,10);
    
    //Insertion des cases grises
    grille.greyCells();

    //check
    perso1.checkPosition (perso2)

    //Insertion des personnages
    grille.insertPlayers();
 

    //Insertion des armes    
    grille.insertWeapons();

    //Insertion des stats de personnages
    $("#stats").append("J1 :" + "arme : "+ perso1.weapon.name + " puissance : " + perso1.weapon.damage +"</br>");
    $("#stats").append("J2 :" + "arme : "+ perso2.weapon.name + " puissance : " + perso2.weapon.damage +"</br>");


    //Déplacement des personnages
    $(document).keydown(function(e){

      if (perso1.swapweapon) {
        console.log("ook");
        $("#" + perso1.swapweapon.position).css("background-image", perso1.swapweapon.visual);
        perso1.swapweapon = 0;
        
      }

      // grille.displayWeapons ();
      // let previousPoistion = perso1.lastPos;
      // console.log(previousPoistion); // undifined

      if (e.which == 39) {//Droite
        $("#" + perso1.pos).removeAttr("style");
        let newPosition = parseInt(perso1.pos) + 1;
        // $("#" + perso1.pos).addClass("perso1"); 
        let direction = "à droite.";
        grille.move(newPosition, perso1, direction);
        //modifier attribut style
      }
      if (e.which == 37) {//Gauche
        $("#" + perso1.pos).removeAttr("style");
        let newPosition = parseInt(perso1.pos) - 1;
        // $("#" + perso1.pos).addClass("perso1");
        let direction = "à gauche.";
        grille.move(newPosition, perso1, direction);
       
      }
      if (e.which == 38) {//Haut

        $("#" + perso1.pos).removeAttr("style");
        let newPosition = parseInt(perso1.pos) - 10;
        // $("#" + perso1.pos).addClass("perso1");
        let direction = "en haut.";
        grille.move(newPosition, perso1, direction);
       
      }
      if (e.which == 40) {//Bas
        $("#" + perso1.pos).removeAttr("style");
        let newPosition = parseInt(perso1.pos) + 10;
        // $("#" + perso1.pos).addClass("perso1");
        let direction = "en bas.";
        grille.move(newPosition, perso1, direction);
        
      }
      
      grille.weapons.forEach(function(weapon){
        for (i=0; i < grille.personnages.length; i++){

          if (grille.personnages[i].position == weapon.position) {
            grille.swapWeapon(weapon.position, weapon, grille.personnages[i]);
            console.log(grille.personnages[i]);
            console.log(weapon);
            // grille.personnages[i].weapon = weapon;
            // console.log(weapon);
            // this.weapon = grille.personnages[i].weapon; //noooo
            // console.log(weapon);
            // console.log(grille.personnages[i].weapon);
            // // $("#" + grille.personnages[i].position).removeClass();
            // let test = $("#" + weapon.position).removeAttr("style");
            // console.log(weapon.position);
            // let previousWeapon = grille.personnages[i].weapon.visual;
            // $(".perso"+ (i+1)).css("background-image", weapon.visual + ', url("perso" + (i+1) + ".png")');


            // $("#" + weapon.position).css("background-image",previousWeapon);
            
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



//Liste de choses à améliorer
// 1) Les personnages ne doivent pas apparaitre cote a cote == > Done
// 2) Les personnages ne peuvent pas apparaitre sur des cases grises
// 3) La premiere arme doit apparaitre sur les joueurs == > Done
// 4) Arme récoltée par le joueur
// 5) Joueur peut se déplacer de 3 cases par tour



