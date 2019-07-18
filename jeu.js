class Jeu {
  constructor() {
      this.grille;

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
      this.grille = new Grille(10,10, [perso1, perso2], [weapon1, weapon2, weapon3, weapon4]);

      this.grille.createGrille();

      this.grille.greyCells();

      //check
      perso1.checkPosition (perso2)
  
      //Insertion des personnages
      this.grille.insertPlayers();
  
  
      //Insertion des armes    
      this.grille.insertWeapons();
  
      //Insertion des stats de personnages
      $("#stats").append("J1 :" + "arme : "+ perso1.weapon.name + " puissance : " + perso1.weapon.damage +"</br>");
      $("#stats").append("J2 :" + "arme : "+ perso2.weapon.name + " puissance : " + perso2.weapon.damage +"</br>");


      //Déplacement des personnages
      $(document).keydown(function(e){


        //Gestion des tours
        let currentPerso = this.swapPerso();

      if (e.which == 39) {//Droite
        $("#" + parseInt(currentPerso.pos)).removeAttr("style");
        let newPosition = parseInt(currentPerso.pos) + 1; // currentperso.pos
        let direction = "à droite.";
        this.grille.move(newPosition, currentPerso, direction);
        //modifier attribut style
      }
      if (e.which == 37) {//Gauche
        $("#" + parseInt(currentPerso.pos)).removeAttr("style");
        let newPosition = parseInt(currentPerso.pos) - 1;
        let direction = "à gauche.";
        this.grille.move(newPosition, currentPerso, direction);
      
      }
      if (e.which == 38) {//Haut

        $("#" + parseInt(currentPerso.pos)).removeAttr("style");
        let newPosition = parseInt(currentPerso.pos) - 10;
        let direction = "en haut.";
        this.grille.move(newPosition, currentPerso, direction);
      
      }
      if (e.which == 40) {//Bas
        $("#" + parseInt(currentPerso.pos)).removeAttr("style");
        let newPosition = parseInt(currentPerso.pos) + 10;
        let direction = "en bas.";
        this.grille.move(newPosition, currentPerso, direction);
        
      }

      this.persoMeet (currentPerso.position);
    

      
    }.bind(this));
    

  
  }


  swapPerso() {
    let currentPerso = this.grille.personnages[0];
    // console.log("avant if " + persoList[0].name)
    if (currentPerso.nbtour === 0) {
    
      this.grille.personnages[0].nbtour = 3;

      // console.log("apres if");

      
      let temp = this.grille.personnages[0];
    
      this.grille.personnages[0] = this.grille.personnages[1];
      this.grille.personnages[1] = temp;

      // console.log(persoList[0].name);
      // currentPerso = persoList[0]
      $("#actions").prepend("Au tour du " + this.grille.personnages[0].name + "</br>");

    }
    
    return currentPerso;
    
  }


  persoMeet (index) {

    if ( index -1 === this.grille.personnages[1].position || index +1 === this.grille.personnages[1].position || index -10 === this.grille.personnages[1].position || index +10 === this.grille.personnages[1].position || index +9 === this.grille.personnages[1].position || index -9 === this.grille.personnages[1].position || index +11 === this.grille.personnages[1].position || index -11 === this.grille.personnages[1].position ){
      console.log("Fight ! Tappez D pour vous défendre ou A pour attaquer"); // mettre un son et a insérer dans le dom

      // Le joueur peut choisir d’attaquer ou de se défendre contre le prochain coup
      $(document).keydown(function(e){
        
        if (e.which == 65) {//Attaquer
            attack(this.perso); 
          
        }else if (e.which == 68) {//Défendre
            defense();
          
        }else {
            console.log("Tappez D pour vous défendre ou A pour attaquer");
        }
      
      });
    }
  }
};
