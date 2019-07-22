//Création des personnages

class Perso {
  constructor(name, visual, weapon) {

    this.position = Math.floor(Math.random() * 99);
    // if (this.position < 10) {
    //   this.position = "0" + this.position;
    // };
    this.name = name;
    this.health = 150;
    this.weapon = this.weapon0;
    this.visual = visual;
    this.weapon = weapon;
    this.weapon.position = this.position;
    this.nbtour = 3;
    this.swapweapon = 0;

  }
  get pos () {
  
     return this.position;
    
  }
//                                           ici !!!!!!!!!!!!!!!!!!!!!!!
  set pos (valeur) {
    // if (/^0/.test(this.position)) {
    //   console.log("not a number");
    //   this.position = parseInt(this.position);
    // }

    this.position = parseInt(valeur);
    
    // if(typeof this.position != "number") {
    //   this.position = parseInt(this.position);
    //   console.log("not a number");
    // }

    // if (this.position < 10) {
    //   this.position = "0" + this.position; 
    // }

}

  get swap () {
    return this.swapweapon;
  }

  get visu () {
    return this.weapon.visual + "," + this.visual;
  }

  get persoWeapon () {
    return this.weapon;
  }
  
  checkPosition (perso2) {

    // Pour que les personnages n'apparaissent pas à coté
    if (perso2.position === this.position || perso2.position === this.position -1 || perso2.position === this.position +1 || perso2.position === this.position -10 || perso2.position ===this.position +10 || perso2.position === this.position +9 || perso2.position === this.position -9 || perso2.position === this.position +11 || perso2.position === this.position -11) {
      perso2.position = Math.floor(Math.random() * 99);
      // playerPosition(perso2);
      
    }


    // Pour que les personnages n'apparaissent pas sur les cases grises

    // if (cell === player.position) {
    //   player.position = Math.floor(Math.random() * 99);
    // }

  }

  // Attaque une cible
  attack(currentP, OtherP, p1 ,p2) {
    // console.log(OtherP.name);
    if (OtherP.health > 0) {
        //Dégats ocasionnés
        const damages = currentP.weapon.damage;
        OtherP.health -= damages;

        //En cas de mort
        if (OtherP.health <= 0) {
            
          OtherP.health = 0;
            console.log("Game over"); //ici mettre un modal 
        }

        $("#stats").html('<span>J2</span> : ' + "Arme : "+ p1.weapon.name + "</br>" + " Puissance : " + p1.weapon.damage +"</br>" + " Santé : " + p1.health +"</br>");
        $("#stats").append('<span>J2</span> : ' + "Arme : "+ p2.weapon.name + "</br>" + " Puissance : " + p2.weapon.damage +"</br>" + " Santé : " + p2.health +"</br>");
    }

    console.log(OtherP.health);
        
  }

  //Lorsque le joueur se défend, il encaisse 50% de dégâts en moins qu’en temps normal
  defence(OtherP) { //index.defense is not a function
    const damages = OtherP.weapon.damages / 2;
    
  }
 
}

//Création d'armes
class Weapon {
  constructor(name, visual, damage) {
    this.position = Math.floor(Math.random() * 99);
    this.name = name;
    this.visual = visual;
    this.damage = damage;
    //this.swap = [false, index] 
  }
}




