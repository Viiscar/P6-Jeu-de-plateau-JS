//Création des personnages

class Perso {
  constructor(name, visual) {

    this.position = Math.floor(Math.random() * 99);
    if (this.position < 10) {
      this.position = "0" + this.position;
    };
    this.name = name;
    this.health = 150;
    this.weapon = this.weapon0;
    this.visual = visual;  

  }

  checkPosition (perso2) {

    // Pour que les personnages n'apparaissent pas à coté
    if (perso2.position === this.position || this.position -1 || this.position +1 || this.position -10 || this.position +10 || this.position +9 || this.position -9 || this.position +11 || this.position -11) {
      perso2.position = Math.floor(Math.random() * 99);
      // playerPosition(perso2);
      console.log("Check " + perso2.position)
    }

    // Pour que les personnages n'apparaissent pas sur les cases grises

    // if (cell === player.position) {
    //   player.position = Math.floor(Math.random() * 99);
    // }

  }
 
} 

let perso1 = new Perso("Joueur 1", 'url("perso4.png")');
perso1.position = "32";
let perso2 = new Perso("Joueur 2", 'url("perso2.png")');
perso2.position = "33";

//Création d'armes
class Weapon {
  constructor(name, visual, damage) {
    this.position = Math.floor(Math.random() * 99);
    this.name = name;
    this.visual = visual;
    this.damage = damage;
  }
}

let weapon0 = new Weapon("Sticky",'url("weapon0.png")', 10);
let weapon1 = new Weapon("Stalker",'url("weapon1.png")', 12);
let weapon2 = new Weapon("Tracker",'url("weapon2.png")', 14);
let weapon3 = new Weapon("Hunter",'url("weapon3.png")', 16);
let weapon4 = new Weapon("Exterminator",'url("weapon4.png")', 20);



