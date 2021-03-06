//Création des personnages

class Perso {
  constructor(name, visual, weapon) {

    this.position = Math.floor(Math.random() * 99);
    this.name = name;
    this.health = 150;
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
    while (perso2.position === this.position || perso2.position === this.position -1 || perso2.position === this.position +1 || perso2.position === this.position -10 || perso2.position ===this.position +10 || perso2.position === this.position +9 || perso2.position === this.position -9 || perso2.position === this.position +11 || perso2.position === this.position -11) {
      perso2.position = Math.floor(Math.random() * 99);
      
    }

  }

  // Attaque une cible
  attack(currentP, OtherP, p1 ,p2) {

    if (OtherP.health > 0) {

        //Dégats ocasionnés
        let damages = currentP.weapon.damage * OtherP.def;
        OtherP.health -= damages;


        $("#inFight").html('<div class = "actionFight" id = "inModal1"><div class = "visuCurrent"></div> Le ' + currentP.name + " attaque le " + OtherP.name + '<div class = "visuOther"></div></div>');
        $("#inFight").append('<div class = "actionFight" id = "inModal2"><div class = "visuOther"></div> Le ' + OtherP.name + " perd " + damages + " points de vie<div></div></div>");
        $(".visuOther").css("background-image", OtherP.visu).css("background-repeat", "no-repeat").css("background-position", "left -70% bottom 50%");
        $(".visuCurrent").css("background-image", currentP.visu).css("background-repeat", "no-repeat").css("background-position", "left -70% bottom 50%");
        
        //En cas de mort
        if (OtherP.health <= 0) {
    
          OtherP.health = 0;
          console.log("Game over")
          $("#modal-title").html('<h4 id = "modal-title" class="modal-title text-center">Game Over</h4');
          $("#inFight").html('<div class = "actionFight" id = "inModal3"><div class = "visuOther"></div> Le ' + OtherP.name + " est K.O.</div>");
          $("#inFight").append('<div class = "actionFight" id = "inModal3"><div class = "visuCurrent"></div> Le ' + currentP.name + " a gagné !</div>");
          $("#fightInstructions").remove();
          $("#inFight").append('<div class="modal-footer">');
          $("#inFight").append('<p id = "tapper">Tappez sur:</p>');     
          $("#inFight").append('<button type="button" class="btn btn-success">"R" pour rejouer</button>');
          $(".visuOther").css("background-image", OtherP.visu).css("background-repeat", "no-repeat").css("background-position", "left -70% bottom 50%");
          $(".visuCurrent").css("background-image", currentP.visu).css("background-repeat", "no-repeat").css("background-position", "left -70% bottom 50%");

          //Bouton rejouer
          $(document).keydown(function(e){
            if (e.which == 82) {//R
              location.reload();
            }
          })
        }

        $("#stats").html('<span>J1</span> : ' + "Arme : "+ p1.weapon.name + "</br>" + " Puissance : " + p1.weapon.damage +"</br>" + " Santé : " + p1.health +"</br>");
        $("#stats").append('<span>J2</span> : ' + "Arme : "+ p2.weapon.name + "</br>" + " Puissance : " + p2.weapon.damage +"</br>" + " Santé : " + p2.health +"</br>");
    
      }

    currentP.def = 1;
        
  }

  //Lorsque le joueur se défend, il encaisse 50% de dégâts en moins qu’en temps normal
  defence(currentP) { 
    currentP.def = 0.5;

    $("#inFight").html('<div class = "actionFight" id = "inModal2"><div class = "visuCurrent"></div> Le ' + currentP.name + " prépare sa défence<div>");
    $(".visuCurrent").css("background-image", currentP.visu).css("background-repeat", "no-repeat").css("background-position", "left -70% bottom 50%");;

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


