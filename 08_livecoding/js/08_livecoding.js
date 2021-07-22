let inputhtml = document.getElementById("text_html");
let inputcss = document.getElementById("text_css");
let max_char = 200;
let textlive = document.getElementById("live");
 
inputhtml.onkeyup = inputhtml.onkeypress  = function(){
    document.getElementById("live").innerHTML = this.value;

    let backcount = inputhtml.value.length;
    let countdown = max_char - textlive.textContent.length;
    document.getElementById("count").innerHTML =  countdown;
    if (countdown == 0) {
        inputhtml.setAttribute("maxlength", backcount);
    }

inputcss.onkeyup = inputcss.onkeypress  = function(){
    document.getElementById("live").innerHTML = this.value;

    let backcount2 = inputcss.value.length;
    let countdown2 = max_char - textlive.textContent.length;
    document.getElementById("count").innerHTML =  countdown2;
    if (countdown2 == 0) {
        inputcss.setAttribute("maxlength", backcount2);
    }
}

    let progress = 100*textlive.textContent.length/max_char;
    document.getElementById("progress").style.setProperty('width',progress.toString()+'%');

    switch (progress){
        case 0:
            document.getElementById("progress").style.setProperty('background-color', "#18DC54");
        break; 
        case 8:
            document.getElementById("progress").style.backgroundColor = "#59df49";
        break;
        case 16:
            document.getElementById("progress").style.backgroundColor = "#7de23e";
        break;
        case 25:
            document.getElementById("progress").style.backgroundColor = "#9be435";
        break;
        case 33:
            document.getElementById("progress").style.backgroundColor = "#b6e62f";
        break;
        case 42:
            document.getElementById("progress").style.backgroundColor = "#c9da19";
        break;
        case 50:
            document.getElementById("progress").style.backgroundColor = "#dace04";
        break;
        case 59:
            document.getElementById("progress").style.backgroundColor = "#e8c100";
        break;
        case 67:
            document.getElementById("progress").style.backgroundColor = "#f1a300";
        break;
        case 76:
            document.getElementById("progress").style.backgroundColor = "#f88100";
        break;
        case 84:
            document.getElementById("progress").style.backgroundColor = "#fd5800";
        break;
        case 92:
            document.getElementById("progress").style.backgroundColor = "#FF0000";
        break;
    }
}

let loading = document.getElementById('loading');
inputhtml.onfocus = () => {
    loading.style.visibility = "visible";
}
inputhtml.onblur = () => {
    loading.style.visibility = "hidden";
}
inputcss.onfocus = () => {
    loading.style.visibility = "visible";
}
inputcss.onblur = () => {
    loading.style.visibility = "hidden";
}

function addBold() {
    inputhtml.value += "<b> </b>";
}

function addItalic() {
    inputhtml.value += "<i> </i>";
}

function addUnderline() {
    inputhtml.value += "<u> </u>";
}

function getGreen() {
    inputcss.value += "<font color='green'> </font>";
}

function getRed() {
    inputcss.value += "<font color='red'> </font>";
}

function getBlue() {
    inputcss.value += "<font color='blue'> </font>";
}
