//objet grille : ici on va mettre tous les objets, fonctions et methodes

class Grille {
    constructor(hauteur, largeur, personnages, weapons) {
      this.hauteur = hauteur;
      this.largeur = largeur;
      //Tableau contenant les perso
      this.personnages = personnages;
      this.weapons = weapons;
      this.nombredeCases = 10;
      this.wall = 'url("grey.png")';


    }

    //   case vide ou grise
    greyCells () {
      let previousCells = [];
      for (let i=0; i < this.nombredeCases; i++) {
        
        let cell = Math.floor(Math.random() * 99);
        
        for (let j = 0; j < previousCells.length; j++) {
          while (previousCells[j] == cell) {
            cell = Math.floor(Math.random()* 99);
          }
        }

        previousCells[i] = cell;
        if (cell < 10) {
          cell = "0" + cell;
        };
        

        $("#" + cell).css("background-image", this.wall);
        $("#" + cell).addClass("wall");
      }

    };

    // generateGrille(){
    //     let ligne = new Array(this.hauteur);
    //     for (let i = 0; i < this.hauteur; i++) {
    //         ligne [i] = new Array(this.largeur);
    //         for (let j=0; j < this.largeur; j++) {
    //             ligne [i][j] = "test";
    //         }

    //     }
        
    // }

    createGrille() {
      
      let table = $("<table></table>");
     
      for (let i = 0;i < this.hauteur; i++) {
        let line = $("<tr></tr>");

        for (let j = 0; j < this.largeur; j++) {
          let column = $("<td id=" + i+j + "></td>");
          $(line).append(column)
          $(table).append(line);
        }

      }
      
      $("#plateau").append(table);

    }
    
    // placement de joueur aleatoire

    insertPlayers () {
      
      for (let i = 0; i < this.personnages.length; i++ ) {
        
        //Si le personnage apparait sur un mur
        if ($(".perso").hasClass("wall")){
          this.personnages[i].position = Math.floor(Math.random() * 99);
        }
        //Si le personnage apparait sur une arme
        if ($(".perso").hasClass("weapon")){
          this.personnages[i].position = Math.floor(Math.random() * 99);
        }

        if (this.personnages[i].position < 10) {
          this.personnages[i].position = "0" + this.personnages[i].position;
        }
        
        $("#" + this.personnages[i].position).css("background-image", this.personnages[i].visu);
        
        //Si la position du personnage commence par 0, alor parseInt
        if (/^0/.test(this.personnages[i].position)) {
          this.personnages[i].position = parseInt(this.personnages[i].position);
        }
        
        
      }


    }

    insertWeapons () {

      let previousCells = [];

      for (let i = 0; i < this.weapons.length; i++ ) {

        let cell = this.weapons[i].position;

        

        for (let j = 0; j < previousCells.length; j++) {
          
          while (previousCells[j] == cell) {
            this.weapons[i].position = Math.floor(Math.random() * 99);
            cell = this.weapons[i].position;
          }
        }

        previousCells[i] = cell;
        
        if (cell < 10) {
          cell = "0" + cell;
        }


        $("#" + cell).addClass("weapon");

        console.log(i);
        console.log(this.weapons);
     
        $("#" + cell).data("data-weapon", i); // C'est parce que c'est la weapon indexée 0 ?
        
        //Si une arme apparait sur un mur
        if ($(".weapon").hasClass("wall")){
          $("#" + this.weapons.position).removeClass("weapon");
          this.weapons.position = Math.floor(Math.random() * 99);
        }


        $("#" + cell).css("background-image", this.weapons[i].visual);

        if (/^0/.test(this.weapons.position)) {
          this.weapons.position = parseInt(this.weapons.position);
        }
      
        
      }


    }

    swapWeapon (index, weapon, perso) {
      
      let previousWeapon = perso.weapon;
      perso.swapweapon = previousWeapon;
      
      
      perso.weapon = weapon;

     
      $("#" + index).css("background-image", perso.visu);
      



      $("#actions").prepend("Le joueur à récupéré l'arme " + weapon.name + ".</br>");
      console.log(perso.swap);
 
    }

    move (index, perso, perso2, direction) {


      
      // C'est ici que ça se passe                                                            !!!!!!!!!
      if (perso.swapweapon != 0){

        // if (this.perso.position != weapon.position){

          
        // }

        //La position est mauvaise
        console.log("Perso");
        console.log(perso.position);
        console.log("swapweapon");
        console.log(perso.swapweapon.position); // même position
        let emplacement = index; // Il faudrait pouvoir y acceder lorsque le joueur sort de  la case ?
        $("#" + perso.swapweapon.position).css("background-image", perso.swapweapon.visual);// swapweapon n'est pas au bon endroit
        perso.swapweapon = 0;
        
      }
      let selectedWeapon = $("#" + index).data("data-weapon");




      if ($("#" + index).data("data-weapon")){
        
        this.swapWeapon(index, this.weapons[selectedWeapon], perso);
        

      }
      // Si le personnage apparait sur un mur

      if ($("#" + index).hasClass("wall")){   //Dans la premère ligne l'index a la classe wall et pourtant le perso bouge
        
      } else {
        perso.position = index;
        perso.weapon.position = index;
      }

      //si le personage sort du cadre
      if ((index) > 99) {
        perso.position = perso.position - 10;
      }

      if ((index) < 0) {
        perso.position = perso.position + 10;
      }

      $("#" + perso.pos).css("background-image", perso.visu);
      $("#actions").prepend("Le joueur s'est déplacé " + direction + "</br>");

      
      if (perso.position === perso2.position|| perso.position -1 === perso2.position || perso.position +1 === perso.position || perso.position -10 === perso2.position || perso.position +10 === perso2.position || perso.position +9 === perso2.position || perso.position -9 === perso2.position || perso.position +11 === perso2.position || perso.position -11 === perso2.position) {

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

      // Tour par tour
      
      perso.nbtour -= 1;

      if (perso.nbtour == 0) {
        perso.nbtour = 3;
        perso = perso2; // comment sélectionner l'autre personnage ?
        
      }
      
    }

    
  }

