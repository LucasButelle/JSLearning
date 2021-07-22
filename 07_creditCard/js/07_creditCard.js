let inputCardNumber = document.getElementById('numerocarte');
let inputCardOwner = document.getElementById('titulaire');
let inputCardExpiration = document.getElementById('expirationdate');
let inputCardCrypto = document.getElementById('crypto');

/** NUMÉRO DE LA CARTE
 * 
 * 
 */
inputCardNumber.onkeyup = inputCardNumber.onkeypress  = function(){
    let liveCardNumber = document.getElementById('numero');
    liveCardNumber.innerHTML = this.value;
    if(inputCardNumber.value === ""){
        liveCardNumber.innerHTML = "• • • • &nbsp; • • • • &nbsp; • • • • &nbsp; • • • •";
    }
}
inputCardNumber.addEventListener('keypress',function (e) {
    if (this.value.length === 4 || this.value.length === 9 || this.value.length === 14) {
        this.value = this.value += ' ';
    }
});

/** TITULAIRE DE LA CARTE
 * 
 * 
 */
inputCardOwner.onkeyup = inputCardOwner.onkeypress  = function(){
    document.getElementById('name').innerHTML = this.value;
    if(inputCardOwner.value === ""){
        document.getElementById('name').innerHTML = "First Name";
    }
}

/** EXPIRATION DE LA CARTE
 * 
 * 
 */
inputCardExpiration.onkeyup = inputCardExpiration.onkeypress  = function(){
    document.getElementById('expiration').innerHTML = this.value;
    if(inputCardExpiration.value === ""){
        document.getElementById('name').innerHTML = "MM / YY";
    }
}
inputCardExpiration.addEventListener('keypress',function () {
    if (this.value.length === 2) {
        this.value = this.value += '/';
}
});

/** CRYPTOGRAMME DE LA CARTE
 * 
 * 
 */
inputCardCrypto.onkeyup = inputCardCrypto.onkeypress  = function(){
    let liveCardCrypto = document.getElementById('cryptogramme');

    liveCardCrypto.innerHTML = this.value;
    if(inputCardCrypto.value === ""){
        liveCardCrypto.innerHTML = "123";
    }
}

/** ANIMATION 'FLIP' DE LA CARTE
 * 
 * 
 */
let flip = document.getElementById('flip');

inputCardCrypto.onfocus = () => {
    flip.style.transform = "rotateY(180deg)";
}
inputCardCrypto.onblur = () => {
    flip.style.transform = "rotateY(0deg)";
}