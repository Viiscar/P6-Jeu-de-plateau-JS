//objet grille : ici on va mettre tous les objets, fonctions et methodes

class Grille {
    constructor(hauteur, largeur) {
      this.hauteur = hauteur;
      this.largeur = largeur;
    }
    generateGrille(){
        let ligne = new Array(this.hauteur);
        for (i = 0; i < this.hauteur; i++) {
            ligne [i] = new Array(this.largeur);
            for (j=0; j < this.largeur; i++) {
                ligne [i][j] = "test";
            }

        }
        
    }

    createGrille() {
      let table = $("<table></table>");

      for (i = 0; i < this.hauteur; i++) {
        let line = $("<tr></tr>");
        for (j=0; j < this.largeur; i++) {
          let column = $("<td id=" + i+j + "></td>");
          $(line).append(column)
          $(table).append(line);
        }

      }
      
      $("#plateau").append(table);

    }
  }

  let grille = new Grille(10,10);

  // var randomgrey = Math.floor(Math.random() * table1.length);
