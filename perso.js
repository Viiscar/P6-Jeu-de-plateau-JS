//Création des personnages

class Perso {
  constructor(name, visual, weapon) {

    this.position = Math.floor(Math.random() * 99);
    if (this.position < 10) {
      this.position = "0" + this.position;
    };
    this.name = name;
    this.health = 150;
    this.weapon = this.weapon0;
    this.visual = visual;
    this.weapon = weapon;  

  }

  checkPosition (perso2) {

    // Pour que les personnages n'apparaissent pas à coté
    if (perso2.position === this.position || perso2.position === this.position -1 || perso2.position === this.position +1 || perso2.position === this.position -10 || perso2.position ===this.position +10 || perso2.position === this.position +9 || perso2.position === this.position -9 || perso2.position === this.position +11 || perso2.position === this.position -11) {
      perso2.position = Math.floor(Math.random() * 99);
      // playerPosition(perso2);
      console.log("Check " + perso2.position)
    }


    // Pour que les personnages n'apparaissent pas sur les cases grises

    // if (cell === player.position) {
    //   player.position = Math.floor(Math.random() * 99);
    // }

  }

  // Attaque une cible
  attack(target) {
    
    if (this.health > 0) {
        //Dégats ocasionnés
        const damages = this.weapon.damage;
        target.health -= damages;

        //En cas de mort
        if (target.health <= 0) {
            
            target.health = 0;
            console.log("Game over");
        }


    }
        
  }

  //Lorsque le joueur se défend, il encaisse 50% de dégâts en moins qu’en temps normal
  defence() {
    const damages = this.weapon.damages / 2;
    
  }
 
}

//Création d'armes
class Weapon {
  constructor(name, visual, damage) {
    this.position = Math.floor(Math.random() * 99);
    this.name = name;
    this.visual = visual;
    this.damage = damage;
  }
}




