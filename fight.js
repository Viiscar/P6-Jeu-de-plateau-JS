//Si l'adversaire est dans le perimetre du joueur un combat s'engage
if (perso1.position || perso1.position -1 || perso1.position +1 || perso1.position -10 || perso1.position +10 || perso1.position +9 || perso1.position -9 || perso1.position +11 || perso1.position -11 === perso2.position) {

    console.log("Fight ! Tappez D pour vous défendre ou A pour attaquer"); // mettre un son et a insérer dans le dom

    // Le joueur peut choisir d’attaquer ou de se défendre contre le prochain coup
    $(document).keydown(function(e){
        if (e.which == 65) {//Attaquer
            attack(this.perso); 
          
        }else if (e.which == 68) {//Défendre
            defense();
         
        }else {
            console.log("Tappez D pour vous défendre ou A pour attaquer");
        }

    });


}



//Si le personnage apparait sur une arme il la récupère
if (Perso.position == Weapon.position) {
    $("#" + Perso.position).removeClass();
    $("#" + Weapon.position).removeClass();
    let previousWeapon = Perso.weapon.visual;
    $(".perso1").css("background-image", this.weapons.visual, url("perso1.png"));
    $("#" + Weapon.position).css("background-image",previousWeapon);
}

//Si le personnage apparait sur un mur
if ($(".perso").hasClass("wall")){
    this.personnages.position = Math.floor(Math.random() * 99);
}
//Si le personnage apparait sur une arme
if ($(".perso").hasClass("weapon")){
    this.personnages.position = Math.floor(Math.random() * 99);
}
//Si une arme apparait sur un mur
if ($(".weapon").hasClass("wall")){ //creer classe weapon
    this.weapons.position = Math.floor(Math.random() * 99);
}


//Si perso arrive sur mur retour a la case départ
if ($(".perso").hasClass("wall")){
    this.personnages.position = previousPosition;
}


// Tour des personnages l'un après l'autre
for (let i = 0; i < personnages.length; i++) {
    // 3 tours par personnage
    for (let j = O; j < 3; j++) {

        $(document).keydown(function(e){
            if (e.which == 39) {//Droite
              $("#" + perso1.position).removeClass("perso1");
              perso1.position = perso1.position + 1;
              $("#" + perso1.position).addClass("perso1"); 
              
            }
            if (e.which == 37) {//Gauche
              $("#" + perso1.position).removeClass("perso1");
              perso1.position = perso1.position - 1;
              $("#" + perso1.position).addClass("perso1");
             
            }
            if (e.which == 38) {//Haut
      
      
      
              $("#" + perso1.position).removeClass("perso1");
              perso1.position = perso1.position - 10;
              if (perso1.position < 10) {                         //fonctionne seulement la premiere fois. Une fois string, impossible de le déplacer.
                perso1.position = "0" + perso1.position;
                perso1.position = parseInt(perso1.position);
              };
              $("#" + perso1.position).addClass("perso1");
             
            }
            if (e.which == 40) {//Bas
              $("#" + perso1.position).removeClass("perso1");
              perso1.position = perso1.position + 10;
              $("#" + perso1.position).addClass("perso1");
              
            }
            if (Perso.position == Weapon.position) {
              $("#" + Perso.position).removeClass();
              $("#" + Weapon.position).removeClass();
              let previousWeapon = Perso.weapon.visual; // Perso no defined
              $(".perso1").css("background-image", this.weapons.visual, url("perso1.png"));
              $("#" + Weapon.position).css("background-image",previousWeapon);
            } 
            
            if (e.which == 13) {//Entrée
              j = 3;
              
            }
          });
    }
}