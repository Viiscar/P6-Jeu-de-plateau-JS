//objet grille : ici on va mettre tous les objets, fonctions et methodes

class Grille {
    constructor(hauteur, largeur, personnages, weapons) {
      this.hauteur = hauteur;
      this.largeur = largeur;
      //Tableau contenant les perso
      this.personnages = personnages;
      this.weapons = weapons;
      this.nombredeCases = 10;
      this.color = 'url("grey.png")';
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
        

        $("#" + cell).css("background-image", this.color);
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
        //Pour insérer le bon personnage
        let persoSelect;
        if (i = 0) {
          persoSelect = "perso1";
        } else if (i = 1) {
          persoSelect = "perso2";
        }
        console.log(i + persoSelect);
          $("#" + this.personnages[i].position).addClass(persoSelect);
          console.log("player position " + this.personnages[i].position);
        
      }

      // if (this.personnages.hasClass("wall")) {
      //   this.position = Math.floor(Math.random() * 99);
      // }
  

    }

    insertWeapon () {

      for (let i = 0; i < this.weapons.length; i++ ) {

        $("#" + this.weapons[i].position).css("background-image", this.weapons[i].visual).css("background-repeat", "no-repeat").css("background-position", "center center");
        console.log("weapon position "+ [i] + " " + this.weapons[i].position);
      }

    }

  }

  

  // var randomgrey = Math.floor(Math.random() * table1.length);
