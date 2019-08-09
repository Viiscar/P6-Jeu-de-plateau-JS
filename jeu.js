class Jeu {
  constructor() {
      this.grille;
      this.gameOver= false;
      this.attack = false;
      this.fightTour =0;
    }

    get over () {
  
      return this.gameOver;
     
   }
 
   set over (valeur) {
 
    this.gameOver = (valeur);
 
   }


  init() {

    //Création d'armes
    let weapon0 = new Weapon("Sticky",'url("weapon0mini.png")', 10);
    let weapon1 = new Weapon("Stalker",'url("weapon1mini.png")', 12);
    let weapon2 = new Weapon("Tracker",'url("weapon2mini.png")', 14);
    let weapon3 = new Weapon("Hunter",'url("weapon3mini.png")', 16);
    let weapon4 = new Weapon("Exterminator",'url("weapon4mini.png")', 20);

    //Création de personages
    let perso1 = new Perso("Joueur 1", 'url("perso1.png")', weapon0);
    let perso2 = new Perso("Joueur 2", 'url("perso2.png")', weapon0);

    //Création de la grille avec les personnages et les armes
    this.grille = new Grille(10,10, [perso1, perso2], [weapon1, weapon2, weapon3, weapon4]);

    //Création de la grille
    this.grille.createGrille();

    //Création des murs
    this.grille.greyCells();

    //check position
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

    //Gestion de la fin du jeu
    if (this.grille.personnages[0].health === 0){
      this.over = true;
    }

      //Si on est pas en mode attack
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


      } else if (this.attack && !this.gameOver) {
        //Mode Attack
        
        if (e.which == 65) {//Attaquer
          
          this.grille.personnages[0].attack(this.grille.personnages[0], this.grille.personnages[1], perso1, perso2); 
          
        }else if (e.which == 68) {//Défendre

          this.grille.personnages[0].defence(this.grille.personnages[0], this.grille.personnages[1], perso1, perso2);

        }else if (this.fightTour > 2){
          if (e.which == 70) { //F
            $("#inModal1").remove();
            $("#inModal2").remove();
            $('#myModal').modal('hide');
            $("#" + parseInt(this.grille.personnages[0].pos)).removeAttr("style");
            let previousPosition = this.grille.personnages[0].position;
            this.grille.personnages[0].position = Math.floor(Math.random() * 99);
  
            while ($("#"+this.grille.personnages[0].pos).hasClass("wall") || $("#"+this.grille.personnages[0].position).hasClass("weapon") || this.grille.personnages[0].position == this.grille.personnages[1].position || this.grille.personnages[0].position == previousPosition){
              this.grille.personnages[0].position = Math.floor(Math.random() * 99);
            }

            $("#actions").prepend('<span id = "runaway">Le ' + this.grille.personnages[0].name + ' s\'est enfui<span></br>');
            //mettre image ici
            $("#"+this.grille.personnages[0].pos).css("background-image", this.grille.personnages[0].visu);

            //On retire l'option fuite du modal
            $("#fightInstructions").html('<div class="modal-footer">');
            $("#fightInstructions").append('<p id = "tapper">Tappez sur:</p>');
            $("#fightInstructions").append('<button type="button" class="btn btn-danger">"A" pour attaquer</button>');
            $("#fightInstructions").append('<button  type="button" class="btn btn-success">"D" pour préparer votre défense</button>');

            // maintenant il ne reste plus qu'a sortir du mode fight
            this.attack = false
            this.fightTour =0
            this.grille.personnages[0].nbtour = 0;
  
          };

        }

        //Le compteur du joueur en cours tombe à zéro
        this.grille.personnages[0].nbtour = 0;

        }

      //Appel de la méthode swapPerso
      this.swapPerso();
      
      //Appel de la méthode peroMeet
      this.persoMeet (this.grille.personnages[0], this.grille.personnages[1]);
  
    
    }.bind(this));
    
  
  }

  //Changement du personnage en cours
  swapPerso() {
    
    if (this.grille.personnages[0].nbtour === 0) {

      this.grille.personnages[0].nbtour = 3;
      
      let temp = this.grille.personnages[0];
    
      this.grille.personnages[0] = this.grille.personnages[1];
      this.grille.personnages[1] = temp;
      if (!this.attack){
        $("#actions").prepend('<div id = "changeP" >Au tour du ' + this.grille.personnages[0].name + "</br></div>");
      }

    }
    
    
  }

  //Si les joueurs se rencontrent un combat se lance
  persoMeet (index) {

    if ( index.position -1 === this.grille.personnages[1].position || index.position +1 === this.grille.personnages[1].position || index.position -10 === this.grille.personnages[1].position || index.position +10 === this.grille.personnages[1].position || index.position +9 === this.grille.personnages[1].position || index.position -9 === this.grille.personnages[1].position || index.position +11 === this.grille.personnages[1].position || index.position -11 === this.grille.personnages[1].position ){
      this.attack = true;

      if (this.fightTour === 1){
        $("#actions").prepend('<span id = "fight">Fight !<span></br>');

      }
      
      //ouverture du modal qui ne se fermera pas au clic

      if (this.fightTour < 2){
        $('#myModal').modal({backdrop: 'static', keyboard: false});
        $('#myModal').modal('show');

      }  else if (this.fightTour === 2){
        $('#myModal').modal('hide');

        $("#fightInstructions").html('<div class="modal-footer">');
        $("#fightInstructions").append('<p id = "tapper">Tappez sur:</p>');
        $("#fightInstructions").append('<button type="button" class="btn btn-danger">"A" pour attaquer</button>');
        $("#fightInstructions").append('<button  type="button" class="btn btn-success">"D" pour préparer votre défense</button>');
        $("#fightInstructions").append('<button  type="button" class="btn btn-primary"> "F" pour fuir</button>');
        $('#myModal').modal({backdrop: 'static', keyboard: false});
        $('#myModal').modal('show');

      }

      this.grille.personnages[0].nbtour = 0;
      this.fightTour +=1;
      console.log(this.fightTour);

      if (this.fightTour === 1){
        $("#fightInstructions").html('<div class="modal-footer">');
        $("#fightInstructions").append('<p id = "tapper">Tappez sur:</p>');
        $("#fightInstructions").append('<button type="button" class="btn btn-danger">"A" pour attaquer</button>');
        $("#fightInstructions").append('<button  type="button" class="btn btn-success">"D" pour préparer votre défense</button>');
      }
    }
  }
};
