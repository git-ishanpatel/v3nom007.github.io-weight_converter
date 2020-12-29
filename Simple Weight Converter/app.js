let Input = document.querySelector('#lbsInput');
let Grams = document.querySelector('#GramsOutput');
let kiloGrams = document.querySelector('#kgOutput');
let Ounces = document.querySelector('#ozOutput');

function clickHandler() {
    Grams.innerHTML=Input.value*453.592 ;
    kiloGrams.innerHTML=Input.value*2.2046;
    Ounces.innerHTML=Input.value*16;
}

Input.addEventListener("change", clickHandler);


 