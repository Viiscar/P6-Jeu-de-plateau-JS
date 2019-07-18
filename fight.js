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
  while (grille.personnages[i].health > 0) {
      //Si le personnage est en vie
      if (grille.personnages[i].health > 0) {

        //Si on appuie sur entrée on passe son tour
        if (e.which == 13) {//Entrée
            grille.personnages[i].nbtour = 0;
                        
        }

      }
  }


  function swapPerso() {
    let currentPerso = persoList[0]
    // console.log("avant if " + persoList[0].name)
    if (currentPerso.nbtour == 0) {
    
      currentPerso.nbtour = 3;

      // console.log("apres if");

      
      let temp = persoList[0];
    
      persoList[0] = persoList[1];
      persoList[1] = temp;

      // console.log(persoList[0].name);
      currentPerso = persoList[0]
      $("#actions").prepend("Au tour du " + persoList[0].name + "</br>");

    }
    
    return currentPerso
    
  }