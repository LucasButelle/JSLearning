/* ***************************************************  COMMENTAIRES *************************************************** */

    // https://developer.mozilla.org/fr/docs/Web/JavaScript

    /* 
            Commentaire
            sur
            plusieurs
            lignes  
    */

    /**
     * https://jsdoc.app/
     * 
     */

    console.log("Hello World !");
    console.warn("Attention !");
    console.error("Ici il y a une erreur");


/* ************************************************ VARIABLES *********************************************** */ 
    /**
        * Let = variable qui peut être modifié plus loin dans le code
        * const = variable qui ne change jamais, elle est bloquée
    */

        var maVariable = "Je suis une variable d'ancienne génération et globale";
        let age = 20;
        const monAnneeDeNaissance = 2000;

        console.log(maVariable);
        console.log(age);
        console.log(monAnneeDeNaissance);

        age = 21;
        console.log(age);

    /**
        *  String
        *  Number
        *  Boolean (True/False)
        *  Object
        *  Array
        *  Null
        *  Undefined
    */

        // Boolean
        let isAdmin = false;

        // Object
        let meteo = {
            temperature : 22,
            vent : "faible"
        };

        // Array
        let apprenants = [
            "Kevin",
            "Lucas",
            "Alexis",
            "Soufiane",
            "Mathilde",
            "Myriam",
            "Florian",
            2021,
            [
                "Nicolas",
                "Christophe"
            ]
        ];

        console.log(meteo);
        console.log(meteo.temperature);
        console.table(apprenants);
        console.table(apprenants[0]);
        console.table(apprenants[5][1]);

        // Concaténation et littéraux de gabarits
        console.log("Bonjour " + apprenants[2] + " aujourd'hui tu es en forme !");
        console.log(`Bonjour ${apprenants[2]} aujourd'hui tu es en forme !`)

        // Fonctionne pour tout type d'opération + modulo
        console.log(age + 1);

        // Typeof permet de renvoyer son opérande
        console.log(typeof age);

/* ************************************************ CONDITIONS *********************************************** */ 
  
    // if(age > 18){
    //     console.log("Entrée autorisée")
    // }
    // else {
    //     console.log("Entrée refusée");
    // }

    if(age <= 40 && age > 18){
        console.log("T'es pas si vieux et t'as le droit d'entrer");
    }
    if(age === 40){
        console.log("Tu as gagné un petit cadeau");
    }

    // Si isAdmin n'est pas TRUE donc FALSE
    if(!isAdmin){
        console.log("Tu es admin");
    }

/* ************************************************ FONCTIONS *********************************************** */ 
  
    function direBonjour(prenom) {
        console.log(`Bonjour ${prenom.toString().toUpperCase()}`);
    }
    direBonjour(apprenants);

/* ************************************************ BOUCLES *********************************************** */ 
  
    for (let i = 0; i < apprenants.length; i++) {
        direBonjour(apprenants[i]);
    }

    apprenants.forEach(element => {
        console.log(element);
    });