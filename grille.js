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

      

      $("#" + cell).css("background-image", this.wall);
      $("#" + cell).addClass("wall");
    }

  };

  createGrille() {
    
    let table = $("<table></table>");
    let index = 0;
    
    for (let i = 0;i < this.hauteur; i++) {
      let line = $("<tr></tr>");

      for (let j = 0; j < this.largeur; j++) {
        
        let column = $("<td id=" + index + "></td>");
        $(line).append(column)
        $(table).append(line);
        index++;
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
      
      $("#" + this.personnages[i].position).css("background-image", this.personnages[i].visu);
    
      
      
    }


  }

  insertWeapons () {

    let previousCells = [];

    for (let i = 0; i < this.weapons.length; i++ ) {

      let cell = this.weapons[i].position;


      for (let j = 0; j < previousCells.length; j++) {
    
        while (previousCells[j] == cell) {
          if (previousCells[j] == cell){
            console.log("previousCells!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
          }
          this.weapons[i].position = Math.floor(Math.random() * 99);
          cell = this.weapons[i].position;
        }

        while ($("#" + cell).hasClass("wall")) {
          if ($("#" + cell).hasClass("wall")){
            console.log("cell).hasClass!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
          }
          this.weapons[i].position = Math.floor(Math.random() * 99);
          cell = this.weapons[i].position;
        }
      }

      previousCells[i] = cell;
      


      $("#" + cell).addClass("weapon");

      console.log(i);
      console.log(this.weapons);
    
      $("#" + cell).data("data-weapon", i);
      $("#" + cell).css("background-image", this.weapons[i].visual);

      
    }


  }

  swapWeapon (index, weapon, perso, p1, p2) {
    
    let previousWeapon = perso.weapon;
    perso.swapweapon = previousWeapon;
    
    
    perso.weapon = weapon;

    
    $("#" + index).css("background-image", perso.visu);
    



    $("#actions").prepend('<div id = "changeW">Le ' + perso.name + " à récupéré l'arme " + weapon.name + ".</br></div>");
    $("#stats").html('<span>J2</span> : ' + "Arme : "+ p1.weapon.name + "</br>" + " Puissance : " + p1.weapon.damage +"</br>" + " Santé : " + p1.health +"</br>");
    $("#stats").append('<span>J2</span> : ' + "Arme : "+ p2.weapon.name + "</br>" + " Puissance : " + p2.weapon.damage +"</br>" + " Santé : " + p2.health +"</br>");

    console.log(perso.swap);


  }

  move (index, perso, direction, p1, p2) { 


      // Si le personnage apparait sur un mur
    if ($("#" + index).hasClass("wall")){ 
      
    } else {
      perso.pos = index;
      perso.weapon.position = index;
    }

    
                                                    
    if (perso.swapweapon != 0){


      console.log("swapweapon");
      console.log(perso.swapweapon.position);
      
      $("#" + perso.swapweapon.position).css("background-image", perso.swapweapon.visual);
      perso.swapweapon = 0;
      
    }
    let selectedWeapon = $("#" + perso.pos).data("data-weapon");
    console.log(index);


    if(typeof $("#" + perso.pos).data("data-weapon") != "undefined") {
      console.log("if");
      this.swapWeapon(perso.pos, this.weapons[selectedWeapon], perso, p1, p2);
      

    }

    //si le personage sort du cadre
    if ((index) > 99) {
      perso.pos = perso.pos - 10;
    }

    if ((index) < 0) {
      perso.pos = perso.pos + 10;
    }

    $("#" + perso.pos).css("background-image", perso.visu);
    $("#actions").prepend("Le " + perso.name + " s'est déplacé " + direction + "</br>");


    // Tour par tour
    // console.log("t "+ perso.nbtour);
    this.personnages[0].nbtour -= 1;
    
    
    
    
  }



  

      
}

    



