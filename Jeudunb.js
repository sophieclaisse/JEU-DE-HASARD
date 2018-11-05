
var essai= 1;
var choixOrdi=0;

function Random () {
    choixOrdi = Math.floor(Math.random()*100)+1;
    console.log(choixOrdi);
}
Random();



document.getElementById("bouton").addEventListener("click", function (){
    var choixU = document.getElementById("choixU").value;
    nombreTest();
   document.getElementById("Reponse").innerHTML= "Vous avez choisi le nombre"+" " + choixU;

   if (choixOrdi<choixU){
    document.getElementById("Result").innerHTML= "Vous avez vu trop grand!";
   }

   if (choixOrdi>choixU){
       document.getElementById("Result").innerHTML= "Vous avez vu trop petit!";
   }

   if (choixOrdi==choixU){
       alert("You win!!!");
       document.getElementById("Result").innerHTML="Trouvé!";
   }

});




function nombreTest () {
    document.getElementById("nbEssai").innerHTML=  essai;
    essai++;

    if (essai > 10) {
        alert("GAME OVER!");

    }
}

document.getElementById("reset").addEventListener("click", function (){
    Random ();
    essai= 1;
    nombreTest ();
});














