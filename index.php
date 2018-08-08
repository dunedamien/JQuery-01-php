<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="CSS/style.css">
    <title>includes</title>
</head>

<body>

    <?php include "inc/nav.php"; ?>
<div class="formulaire">
    <div>
        <label class="nom" for="nom">Nom</label>
        <span id="no_name"></span><br>
        <input type="text" id="nom">
    </div>


    <div>
        <label class="prenom" for="prenom">Prenom</label>
        <span id="no_firstname"></span><br>
        <input type="text" id="prenom">
    </div>

    
    <div>
    <label class="age" for="age">Age</label>
    <span id="no_age"></span><br>
    <input type="number" id="age"> 
    </div>

    <button id="button">Envoyer</button>
</div>    
    <div class="resultat">
            <p id="resultat"></p>  
    </div>

    <hr>

    <div>
        aaaa
        <p>P est de type block</p>
        bbb
    </div>

    <hr>

    <div>
        aaaa
        <span>SPAN est de type inline</span>
        bbb
    </div>

    <script src="JS/jQuery.min.js"></script>
    <script src="JS/app.js"></script>
</body>

</html>

    <?php include "inc/footer.php"; ?>