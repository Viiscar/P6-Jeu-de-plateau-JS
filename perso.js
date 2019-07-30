//Création des personnages

class Perso {
  constructor(name, visual, weapon) {

    this.position = Math.floor(Math.random() * 99);
    this.name = name;
    this.health = 150;
    this.weapon = this.weapon0;
    this.visual = visual;
    this.weapon = weapon;
    this.weapon.position = this.position;
    this.nbtour = 3;
    this.swapweapon = 0;
    this.def = 1;

  }
  get pos () {
  
     return this.position;
    
  }

  set pos (valeur) {

    this.position = parseInt(valeur);

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


  }

  // Attaque une cible
  attack(currentP, OtherP, p1 ,p2) {
    // console.log(OtherP.name);
    if (OtherP.health > 0) {
      console.log(OtherP.health);
      console.log(OtherP.def);
        //Dégats ocasionnés
        let damages = currentP.weapon.damage * OtherP.def;
        OtherP.health -= damages;

        //En cas de mort
        if (OtherP.health <= 0) {
            
          OtherP.health = 0;
            console.log("Game over");
            $("#inFight").html('<p><img src="'+ OtherP.visual+ '" alt="Perso">Le ' + OtherP.name + "est K.O.");
            $("#inFight").append('<p><img src="'+ currentP.visual+ '" alt="Perso">Le ' + currentP.name + "a gagné !");
        }

        $("#inFight").html('<p><img src="'+ currentP.visual+ '" alt="Perso"> Le ' + currentP.name + " attaque le " + OtherP.name + '<p><img src="'+ OtherP.visual + "</p>");
        $("#inFight").append('<p><img src="'+ OtherP.visual+ '" alt="Perso"> Le ' + currentP.name + " perd " + currentP.weapon.damage + " points de vie");

        $("#stats").html('<span>J1</span> : ' + "Arme : "+ p1.weapon.name + "</br>" + " Puissance : " + p1.weapon.damage +"</br>" + " Santé : " + p1.health +"</br>");
        $("#stats").append('<span>J2</span> : ' + "Arme : "+ p2.weapon.name + "</br>" + " Puissance : " + p2.weapon.damage +"</br>" + " Santé : " + p2.health +"</br>");
    }

    console.log(OtherP.health);
    currentP.def = 1;
        
  }

  //Lorsque le joueur se défend, il encaisse 50% de dégâts en moins qu’en temps normal
  defence(currentP) { 
    currentP.def = 0.5;

    $("#inFight").html('<p><img src="'+ currentP.visual+ '" alt="Perso"> Le ' + currentP.name + " prépare sa défence");

    console.log(currentP.name + " prépare sa défence");

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




