$(function(){

    console.log('Document chargé');

//    var resultat = $('resultat');
//    console.log('resultat', resultat);

    function onClick() {
        var nom =$("#nom").val();
        var prenom =$("#prenom").val();
        var age =$("#age").val();
        var formulaire=$("#formulaire");
        
        // verif age
        if (age < 0) {
            // strictement plus petit que 0
            resultat.innerHTML ="Bonjour " + prenom + ", je connais ton nom " + nom + " ,tu as " +age + " ans" + ", tu n'est pas née";
            resultat.style.color = "red";
            formulaire.style.color ="red";
        
        } else if (age >= 0 && age < 18){
            // de 0 (inclus) à 18 (exclus)
            // 17.5 passe ici
            resultat.innerHTML ="Bonjour " + prenom + ", je connais ton nom " + nom + " ,tu as " +age + " ans" + ", tu est Mineur";
            resultat.style.color = "red";
            formulaire.borderColor ="red";

        
        } else if (age >= 18) {
            // superieur ou égal a 18
            resultat.innerHTML ="Bonjour " + prenom + ", je connais ton nom " + nom + " ,tu as " +age + " ans" +  ", tu est majeur";
            resultat.style.color = "green";
            formulaire.border.Color ="green";
        }

        // *********************************************************************

        // verif age
    // champ de l'age vide
        if (age === "") {
            no_age.innerHTML =" *Veuillez renseigner votre age";
            resultat.innerHTML =""
            console.log("Veuillez renseigner votre age")
    // champ de l'age rempli
        } else {
            no_age.innerHTML ="";
        }

        // verif nom
    // champ du nom vide
        if (nom === "") {
            no_name.innerHTML =" *Veuillez renseigner votre nom";
            resultat.innerHTML =""
            console.log("Veuillez renseigner votre nom")
    // champ du nom rempli
        } else {
            no_name.innerHTML =""; 
        }

        // verif prenom
    // champ du prenom vide
        if (prenom === "") {
            no_firstname.innerHTML =" *Veuillez renseigner votre prenom";
            resultat.innerHTML =""
            console.log("Veuillez renseigner votre prenom")
    // champ du prenom rempli
        } else {
            no_firstname.innerHTML ="";
        }
    }

    $('#button').click(onClick);
});

