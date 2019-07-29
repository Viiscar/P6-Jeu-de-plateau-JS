class Jeu {
  constructor() {
      this.grille;
      this.attack = false;

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
    $("#stats").append('<span>J1</span> : ' + "Arme : "+ perso1.weapon.name + "</br>" + " Puissance : " + perso1.weapon.damage + "</br>" + " Santé : " + perso1.health +"</br>");
    $("#stats").append('<span>J2</span> : ' + "Arme : "+ perso2.weapon.name + "</br>" + " Puissance : " + perso2.weapon.damage +"</br>" + " Santé : " + perso1.health +"</br>");

    //Déplacement des personnages
    $(document).keydown(function(e){


      if (!this.attack){

        if (e.which == 39) {//Droite
          $("#" + parseInt(this.grille.personnages[0].pos)).removeAttr("style");
          let newPosition = parseInt(this.grille.personnages[0].pos) + 1; // this.grille.personnages[0].pos
          let direction = "à droite.";
          this.grille.move(newPosition, this.grille.personnages[0], direction, perso1, perso2);
          //modifier attribut style
        }
        if (e.which == 37) {//Gauche
          $("#" + parseInt(this.grille.personnages[0].pos)).removeAttr("style");
          let newPosition = parseInt(this.grille.personnages[0].pos) - 1;
          let direction = "à gauche.";
          this.grille.move(newPosition, this.grille.personnages[0], direction, perso1, perso2);
        
        }
        if (e.which == 38) {//Haut
  
          $("#" + parseInt(this.grille.personnages[0].pos)).removeAttr("style");
          let newPosition = parseInt(this.grille.personnages[0].pos) - 10;
          let direction = "en haut.";
          this.grille.move(newPosition, this.grille.personnages[0], direction, perso1, perso2);
        
        }
        if (e.which == 40) {//Bas
          $("#" + parseInt(this.grille.personnages[0].pos)).removeAttr("style");
          let newPosition = parseInt(this.grille.personnages[0].pos) + 10;
          let direction = "en bas.";
          this.grille.move(newPosition, this.grille.personnages[0], direction, perso1, perso2);
          
        }

      } else {

        //Mode Attack

        //fermeture du modal
        // $('#myModal').modal('hide');
        
        if (e.which == 65) {//Attaquer
          
          this.grille.personnages[0].attack(this.grille.personnages[0], this.grille.personnages[1], perso1, perso2); 
          
        }else if (e.which == 68) {//Défendre
          //index.defence(index, index2, p1, p2);
          this.grille.personnages[0].defence(this.grille.personnages[0], this.grille.personnages[1], perso1, perso2);
          // console.log(index2.weapon.damages);
        }else {
            console.log('Tappez D pour vous défendre ou A pour attaquer');
        }

        this.grille.personnages[0].nbtour = 0; //Le premier attaque 2 fois

        }

      //Gestion des tours
      this.swapPerso();

      this.persoMeet (this.grille.personnages[0], this.grille.personnages[1], perso1, perso2);
  
    
    }.bind(this));
    
  
  }


  swapPerso() {// comme il est appelé avant le combat ça fausse les tours ?
    
    // console.log("avant if " + persoList[0].name)
    if (this.grille.personnages[0].nbtour === 0) {

      this.grille.personnages[0].nbtour = 3;

      // console.log("apres if");

      
      let temp = this.grille.personnages[0];
    
      this.grille.personnages[0] = this.grille.personnages[1];
      this.grille.personnages[1] = temp;

      // console.log(persoList[0].name);
      // this.grille.personnages[0] = persoList[0]
      $("#actions").prepend('<div id = "changeP" >Au tour du ' + this.grille.personnages[0].name + "</br></div>");

    }
    
    
  }


  persoMeet (index, index2, p1, p2) {

    if ( index.position -1 === this.grille.personnages[1].position || index.position +1 === this.grille.personnages[1].position || index.position -10 === this.grille.personnages[1].position || index.position +10 === this.grille.personnages[1].position || index.position +9 === this.grille.personnages[1].position || index.position -9 === this.grille.personnages[1].position || index.position +11 === this.grille.personnages[1].position || index.position -11 === this.grille.personnages[1].position ){
      console.log("Fight ! Tappez D pour vous défendre ou A pour attaquer"); // mettre un son et a insérer dans le dom

      $("#actions").prepend('<span id = "fight">Fight !<span></br>');

      //il faut gérer le chacun son tour ici et que defense s'active avant attack

      //ouverture du modal
      $('#myModal').modal('show');

      this.attack = true;

      
      // console.log(this.swapPerso().name);
      // Le joueur peut choisir d’attaquer ou de se défendre contre le prochain coup
    
    }
  }
};
