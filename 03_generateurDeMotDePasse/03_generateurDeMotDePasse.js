/**
 * à partir d'un tableau de caractères, vous devez générer un mot de passe de 8 caractères
 * bonus : le mot de passe contient  minimum 1 majuscule, 1 caractère spécial & 1 nombre
 */

 const chars = [
    "0123456789",
    "AZERTYUIOPQSDFGHJKLMWXCVBN",
    "azertyuiopqsdfghjklmwxcvbn",
    "`~!@#$%^&*()-_=+[{]}|;:',<.>/?",
]

// Je crée ici des fonctions me permettant de récupérer un caractères aléatoirement
function getLowercase() {
    // chars.indexOf me permet de trouver la clé du tableau "chars" qui contient les minuscules.
    const key = chars.indexOf(chars[2]);
    return chars[key][Math.floor(Math.random() * chars[key].length)];
}

function getUppercase() {
    // chars.indexOf me permet de trouver la clé du tableau "chars" qui contient les majuscules.
    const key = chars.indexOf(chars[1]);
    return chars[key][Math.floor(Math.random() * chars[key].length)];
}

function getNumber() {
    // chars.indexOf me permet de trouver la clé du tableau "chars" qui contient les nombres.
    const key = chars.indexOf(chars[0]);
    return chars[key][Math.floor(Math.random() * chars[key].length)];
}

function getSpecial() {
    // chars.indexOf me permet de trouver la clé du tableau "chars" qui contient les caractères spéciaux.
    const key = chars.indexOf(chars[3]);
    return chars[key][Math.floor(Math.random() * chars[key].length)];
}

// Je crée une fonction "randomPassword" avec différents paramètres
function randomPassword(passwordLenght, upper = true, lower = true, special = true, number = true) {
    let newPassword = '';

    // J'utilise ici des conditions ternaires pour compacter le code (remplace le if/else)
    // chars.splice(1,1) me permet de supprimer l'élément qui contient les majuscules dans mon tableau chars[1]

    // if(upper){
    //     newPassword += getUppercase();
    // }
    // else{
    //     chars.splice(1,1);
    // }
    (upper) ? newPassword += getUppercase() : chars.splice(1, 1);
    
    (lower) ? newPassword += getLowercase() : chars.splice(2, 2);
    // chars.shift() me permet de supprimer le premier élément de mon tableau chars[0]
    (number) ? newPassword += getNumber() : chars.shift();
    // chars.pop() me permet de supprimer le dernier élément de mon tableau chars[3]
    (special) ? newPassword += getSpecial() : chars.pop();

        // Tant que newPassword est inférieur à passwordLength
        while (newPassword.length < passwordLenght) {
            // Je déclare une variable randomIndex qui a pour valeur un élément du tableau chars choisi aléatoirement
            randomIndex = chars[Math.floor(Math.random() * chars.length)];
    
            // Je récupère un caractère aléatoire contenu dans l'élément "randomIndex" et je l'unifie dans ma variable newPassword
            newPassword += randomIndex[Math.floor(Math.random() * randomIndex.length)];
        }
        return newPassword;     
}
console.log(randomPassword(8, true, true, true, true));