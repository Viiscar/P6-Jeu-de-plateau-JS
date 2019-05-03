//Si l'adversaire est dans le perimetre du joueur un combat s'engage
if (perso1.position || perso1.position -1 || perso1.position +1 || perso1.position -10 || perso1.position +10 || perso1.position +9 || perso1.position -9 || perso1.position +11 || perso1.position -11 === perso2.position) {

    console.log("Fight ! Tappez D pour vous défendre ou A pour attaquer"); // mettre un son et a insérer dans le dom

    //Récupération du choix utilisateur
    $(document).keydown(function(e){
        if (e.which == 65) {//Attaquer
            attack(this.perso); 
          
        }else if (e.which == 68) {//Défendre
            defense();
         
        }else {
            console.log("Tappez D pour vous défendre ou A pour attaquer");
        }

      });
    

    //Chacun son tour
    
    attack(perso1);


}


// Le joueur peut choisir d’attaquer ou de se défendre contre le prochain coup
//Lorsque le joueur se défend, il encaisse 50% de dégâts en moins qu’en temps normal