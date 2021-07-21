// L'ordinateur va choisir un nombre au hasard entre 1 et 10.
// 3 essaies pour trouver le nombre mystère
// Si tu trouve la bonne réponse alors affiche dans la console log "Féliciation..."
// Sinon afficher "Pas de chance" = numéro pas trouvé et réitérer la demande

const min = 1
const max = 10

// Je crée une fonction randomNumber qui va générer un numéro aléatoirement entre un minimum & un maximum que l'on désigne dans les varibales ci-dessus.
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let resultToFind = randomNumber(min, max);

let attempt = 1;
const lastChance = 3;
let attemptTotal = lastChance + 1;
let reponse = [3,5,7];

// Dans la boucle for, je vérifie chaque cas :
for (let i = 0; i < attempt; i++) {
    // Si la réponse est supérieur au résultat cherché alors j'affiche que c'est moins
    if( reponse[i] > resultToFind){
        console.log("C'est moins")
    } 
    // Si la réponse est inférieure au résultat cherché alors j'affiche que c'est plus
    else if ( reponse[i] < resultToFind){
        console.log("C'est plus");
    }
    // Si la réponse est égale au résultat cherché alors j'affiche qu'il a gagné en combien d'essai
    else if ( reponse[i] === resultToFind){
        console.log(`C'est gagné, tu as réussi en ${attempt} essais`);
        break
    }
    
    // A chaque itération on retire 1 essai si le resultat n'a pas été trouvé
    console.log(`Essai restant ${3-attempt}`);
    attempt++;
    
    // Si le nombre d'essai a atteint le maximum, je donne une dernière chance en affichant l'écart entre le résultant entré et le résultat cherché
    if(attempt == lastChance){
        console.log(`Dernière chance, le chiffre à trouver est à ${resultToFind - reponse[i]} d'écart`);
    }
    // Si le nombre d'essai a atteint le maximum après la derniere chance alors j'affiche que c'est perdu en affichant le resultat qui était attendu
    else if( attempt == attemptTotal){
        console.log(`PERDU ! Le chiffre à trouver était : ${resultToFind}`);
        break
    }
    
}