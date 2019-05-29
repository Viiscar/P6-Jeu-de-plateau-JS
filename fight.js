//Si l'adversaire est dans le perimetre du joueur un combat s'engage
if (perso1.position === perso2.position|| perso1.position -1 === perso2.position || perso1.position +1 === perso2.position || perso1.position -10 === perso2.position || perso1.position +10 === perso2.position || perso1.position +9 === perso2.position || perso1.position -9 === perso2.position || perso1.position +11 === perso2.position || perso1.position -11 === perso2.position) {

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
  


  //Squelette tour perso
  //Selection du personage
  for (i=0; i < grille.personnages.length+1; i++) {
      //Si le personnage est en vie
      if (grille.personnages[i].health > 0) {

        //Si on appuie sur entrée on passe son tour
        if (e.which == 13) {//Entrée
            grille.personnages[i].nbtour = 0;
                        
        }

      }
  }


