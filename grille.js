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

       
        console.log(cell, previousCells);
        previousCells[i] = cell;
        if (cell < 10) {
          cell = "0" + cell;
        };
        

        $("#" + cell).css("background-image", this.wall);
        $("#" + cell).addClass("wall");
      }

    };

    generateGrille(){
        let ligne = new Array(this.hauteur);
        for (let i = 0; i < this.hauteur; i++) {
            ligne [i] = new Array(this.largeur);
            for (let j=0; j < this.largeur; j++) {
                ligne [i][j] = "test";
            }

        }
        
    }

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

    insertPlayer () {
      let wall = $(".wall");
      console.log(wall);
      for (let i = 0; i < this.personnages.length; i++ ) {
        console.log("a" + i);
        //Si le personnage apparait sur un mur
        if ($(".perso").hasClass("wall")){
          this.personnages.position = Math.floor(Math.random() * 99);
        }
        //Si le personnage apparait sur une arme
        if ($(".perso").hasClass("weapon")){
          this.personnages.position = Math.floor(Math.random() * 99);
        }
        
        $("#" + this.personnages[i].position).addClass("perso"+(i+1));
        console.log("player position " + this.personnages[i].position);
        
      }



    }

    insertWeapon () {

      let previousCells = [];

      for (let i = 0; i < this.weapons.length; i++ ) {

        let cell = this.weapons[i].position;

        console.log("p "+previousCells);

        for (let j = 0; j < previousCells.length; j++) {
          console.log(previousCells);
          while (previousCells[j] == cell) {
            this.weapons[i].position = Math.floor(Math.random() * 99);
            cell = this.weapons[i].position;
          }
        }

        previousCells[i] = cell;
        if (cell < 10) {
          cell = "0" + cell;
        }

        //Si une arme apparait sur un mur
        if ($(".weapon").hasClass("wall")){ //creer classe weapon
          this.weapons.position = Math.floor(Math.random() * 99);
        }


        $("#" + cell).css("background-image", this.weapons[i].visual).css("background-repeat", "no-repeat").css("background-position", "center center");
        console.log("weapon position "+ [i] + " " + this.weapons[i].position);
        $("#" + cell).addClass("weapon");
      }

    }

  }

  

 //persoSelect ne fonctionne pas parfaitement
