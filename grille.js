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

      console.log(this.weapons);
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
      let wall = $(".wall");
      
      for (let i = 0; i < this.personnages.length; i++ ) {
        
        //Si le personnage apparait sur un mur
        if ($(".perso").hasClass("wall")){
          this.personnages[i].position = Math.floor(Math.random() * 99);
        }
        //Si le personnage apparait sur une arme
        if ($(".perso").hasClass("weapon")){
          this.personnages[i].position = Math.floor(Math.random() * 99);
        }
        
        $("#" + this.personnages[i].position).css("background-image", this.personnages[i].visu);
        
        
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
        //Si une arme apparait sur un mur
        if ($(".weapon").hasClass("wall")){ //No
          $("#" + this.weapons.position).removeClass(weapon);
          this.weapons.position = Math.floor(Math.random() * 99);
        }


        $("#" + cell).css("background-image", this.weapons[i].visual);
      
        
      }


    }

    swapWeapon (index, weapon, perso) {
      $("#" + index).removeClass("perso1");
      let previousWeapon = perso.weapon;
      perso.swapweapon = previousWeapon;
      // console.log(perso.weapon.position);
      perso.weapon = weapon;

     
      $("#" + index).css("background-image", perso.visu);
      

      // On supprime l'arme de la case du tableau et on y ajoute celle du personnage
      let weaponPos = this.weapons.indexOf(weapon);
      this.weapons.splice(weaponPos, 1);
      this.weapons.push(previousWeapon);

      // console.log(this.weapons);

      $("#actions").prepend("Le joueur à récupéré l'arme " + weapon.name + ".</br>");
 
    }

    displayWeapons () {
      
      this.weapons.forEach(function(weapon){
          
        let weaponAttr = $("#" + weapon.position).attr("style");

        if (typeof weaponAttr !== typeof undefined && weaponAttr !== false) {
          // c'est pas weapon position. c'est la place de l'autre arme
        }else {
            $("#" + weapon.position).css("background-image", weapon.visual);
            console.log("t" + weapon.position);
          }
        
      });

    }

    move (index, perso, direction) {

      perso.nbtour -= 1;
      
      // Si le personnage apparait sur un mur
      if ($("#" + index).hasClass("wall")){
        
      } else {
        perso.position = index;
        perso.weapon.position = index;
      }

      //si le personage sort du cadre
      if ((index) > 99) {
        perso.position = perso.position - 10;
      }

      if ((index) < 1) {
        perso.position = perso.position + 10;
      }

      // le personnage se dédouble
      // if (perso.position < 10) {
      //   perso.position = "0" + perso.position;
      // };

      $("#" + perso.position).css("background-image", perso.visu);
      $("#actions").prepend("Le joueur s'est déplacé " + direction + "</br>");
  
      
      

      
    }

    
  }

