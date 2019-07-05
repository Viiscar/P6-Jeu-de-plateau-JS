class Jeu {
    constructor(grille, perso, weapon) {
        this.grille = grille;
        this.perso = perso;
        this.weapon = weapon; 
      }


    init() {

        //Création d'armes
        let weapon0 = new Weapon("Sticky",'url("weapon0mini.png")', 10);
        let weapon1 = new Weapon("Stalker",'url("weapon1mini.png")', 12);
        let weapon2 = new Weapon("Tracker",'url("weapon2mini.png")', 14);
        let weapon3 = new Weapon("Hunter",'url("weapon3mini.png")', 16);
        let weapon4 = new Weapon("Exterminator",'url("weapon4.png")', 20);

        //Création de personages
        let perso1 = new Perso("Joueur 1", 'url("perso1.png")', weapon0);
        let perso2 = new Perso("Joueur 2", 'url("perso2.png")', weapon0);

        //Création de la grille avec les personnages et les armes
        let grille = new Grille(10,10, [perso1, perso2], [weapon1, weapon2, weapon3, weapon4]);

        grille.createGrille();

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

  
        if (e.which == 39) {//Droite
          $("#" + perso1.pos).removeAttr("style");
          let newPosition = perso1.position + 1;
          // $("#" + perso1.pos).addClass("perso1"); 
          let direction = "à droite.";
          grille.move(newPosition, perso1, direction);
          //modifier attribut style
        }
        if (e.which == 37) {//Gauche
          $("#" + perso1.pos).removeAttr("style");
          let newPosition = perso1.position - 1;
          // $("#" + perso1.pos).addClass("perso1");
          let direction = "à gauche.";
          grille.move(newPosition, perso1, perso2, direction);
         
        }
        if (e.which == 38) {//Haut
  
          $("#" + perso1.pos).removeAttr("style");
          let newPosition = perso1.position - 10;
          // $("#" + perso1.pos).addClass("perso1");
          let direction = "en haut.";
          grille.move(newPosition, perso1, direction);
         
        }
        if (e.which == 40) {//Bas
          $("#" + perso1.pos).removeAttr("style");
          let newPosition = perso1.position + 10;
          // $("#" + perso1.pos).addClass("perso1");
          let direction = "en bas.";
          grille.move(newPosition, perso1, direction);
          
        }
        
  
   
      

        
      });
      

    
    }


    
};