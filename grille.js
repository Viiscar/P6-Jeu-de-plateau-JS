//objet grille : ici on va mettre tous les objets et methodes

class Grille {
  constructor(hauteur, largeur, personnages, weapons) {
    this.hauteur = hauteur;
    this.largeur = largeur;
    //Tableau contenant les perso
    this.personnages = personnages;
    this.weapons = weapons;
    this.nombredeCasesGrises = 10;
    this.wall = 'url("grey.png")';


  }

  //   case vide ou grise
  greyCells () {
    let previousCells = [];
    for (let i=0; i < this.nombredeCasesGrises; i++) {
      
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

   //insertion des armes
   insertWeapons () {

    let previousCells = [];

    for (let i = 0; i < this.weapons.length; i++ ) {

      let cell = this.weapons[i].position;

      for (let j = 0; j < previousCells.length; j++) {
    
        while (previousCells[j] === cell || $("#" + cell).hasClass("wall")){
          this.weapons[i].position = Math.floor(Math.random() * 99);
          cell = this.weapons[i].position;
        }

      }

      previousCells[i] = cell;

      $("#" + cell).addClass("weapon");  
      $("#" + cell).data("data-weapon", i);
      $("#" + cell).css("background-image", this.weapons[i].visual);
      
    }

  }
  
  // placement de joueur aleatoire

  insertPlayers () {
    
    for (let i = 0; i < this.personnages.length; i++ ) {


      while($("#" + this.personnages[i].position).hasClass("wall") || $("#" + this.personnages[i].position).data("data-weapon")) {
        this.personnages[i].position = Math.floor(Math.random() * 99);
        console.log("oui");
      }
      
      $("#" + this.personnages[i].position).css("background-image", this.personnages[i].visu);
    
      console.log(this.personnages[i].position);
      
    }

  }
 
  //changement d'arme
  swapWeapon (index, weapon, perso, p1, p2) {

    this.weapons.splice(this.weapons.indexOf(weapon), 1, perso.weapon);
    $("#" + index).data("data-weapon", this.weapons.indexOf(perso.weapon));

    perso.swapweapon = perso.weapon;

    perso.weapon = weapon;
    
    $("#" + index).css("background-image", perso.visu);

    $("#actions").prepend('<div id = "changeW">Le ' + perso.name + " à récupéré l'arme " + weapon.name + ".</br></div>");
    $("#stats").html('<span>J1</span> : ' + "Arme : "+ p1.weapon.name + "</br>" + " Puissance : " + p1.weapon.damage +"</br>" + " Santé : " + p1.health +"</br>");
    $("#stats").append('<span>J2</span> : ' + "Arme : "+ p2.weapon.name + "</br>" + " Puissance : " + p2.weapon.damage +"</br>" + " Santé : " + p2.health +"</br>");

  }

  move (index, perso, direction, p1, p2) { 

    // Si le personnage va sur un mur
    if ($("#" + index).hasClass("wall")){ 
      
    } else {
      perso.pos = index;
      perso.weapon.position = index;
    }

    // Si l'arme est échangée
    if (perso.swapweapon != 0){
       $("#" + perso.swapweapon.position).css("background-image", perso.swapweapon.visual);
      perso.swapweapon = 0; 
    }

    // Si le personnage va sur une arme                                               
    if(typeof $("#" + perso.pos).data("data-weapon") != "undefined") {
      let selectedWeapon = $("#" + perso.pos).data("data-weapon");
      this.swapWeapon(perso.pos, this.weapons[selectedWeapon], perso, p1, p2);  
    }

    //si le personage sort du cadre
    if ((index) > 99) {
      perso.pos = perso.pos - 10;
    }

    if ((index) < 0) {
      perso.pos = perso.pos + 10;
    }

    //Changement du visuel du personnage
    $("#" + perso.pos).css("background-image", perso.visu);
    $("#actions").prepend("Le " + perso.name + " s'est déplacé " + direction + "</br>");

    // Tour par tour
    this.personnages[0].nbtour -= 1;
  }

      
}

    



