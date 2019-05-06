//objet grille : ici on va mettre tous les objets, fonctions et methodes

class Grille {
    constructor(hauteur, largeur, personnages, weapons) {
      this.hauteur = hauteur;
      this.largeur = largeur;
      //Tableau contenant les perso
      this.personnages = personnages;
      this.weapons = weapons;
    }
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

      for (i = 0; i < this.personnages.length; i++ ) {

        $("#" + this.personnages[i].position).css("background-image", this.personnages[i].visual).css("background-repeat", "no-repeat").css("background-position", "center center");
        console.log("player position " + this.personnages[i].position);
      }

    

  
    }

  }

  

  // var randomgrey = Math.floor(Math.random() * table1.length);
