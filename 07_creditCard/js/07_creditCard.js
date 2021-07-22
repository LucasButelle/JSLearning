let inputCardNumber = document.getElementById('numerocarte');
let inputCardOwner = document.getElementById('titulaire');
let inputCardExpiration = document.getElementById('expirationdate');
let inputCardCrypto = document.getElementById('crypto');


inputCardNumber.onkeyup = inputCardNumber.onkeypress  = function(){
    let liveCardNumber = document.getElementById('numero');
    liveCardNumber.innerHTML = this.value;
    if(inputCardNumber.value === ""){
        liveCardNumber.innerHTML = "•••• •••• •••• ••••";
    }
}

inputCardOwner.onkeyup = inputCardOwner.onkeypress  = function(){
    document.getElementById('name').innerHTML = this.value;
    if(inputCardOwner.value === ""){
        document.getElementById('name').innerHTML = "First Name";
    }
}

inputCardExpiration.onkeyup = inputCardExpiration.onkeypress  = function(){
    document.getElementById('expiration').innerHTML = this.value;
    if(inputCardExpiration.value === ""){
        document.getElementById('name').innerHTML = "MM / YY";
    }
}

inputCardCrypto.onkeyup = inputCardCrypto.onkeypress  = function(){
    document.getElementById('crypto').innerHTML = this.value;
}

let flip = document.getElementById('flip');

inputCardCrypto.onfocus = () => {
    flip.style.transform = "rotateY(180deg)";
}
inputCardCrypto.onblur = () => {
    flip.style.transform = "rotateY(0deg)";
}





function space(inputCardNumber, space) {
    space = 4;
    let v = inputCardNumber.value.replace(/[^\dA-Z]/g, ''),
        reg = new RegExp(".{" + space + "}","g")
        inputCardNumber.value = v.replace(reg, function (a, b, c) {
        return a + ' ';
    });
}

inputCardNumber.addEventListener('keyup', function () {
    space(this, 4);
});





function slash(inputCardNumber, slash) {
    slash = 2;
    let v = inputCardExpiration.value.replace(/[^\dA-Z]/g, ''),
        reg = new RegExp(".{" + slash + "}","g")
        inputCardExpiration.value = v.replace(reg, function (a, b, c) {
        return a + '/';
    });
}

inputCardExpiration.addEventListener('keyup', function () {
    slash(this, 2);
});