//Definition of variables and items

const beat = document.getElementById("main-block");
const text = document.getElementById("zero-element");
const text2 = document.getElementById("first-element");
const text3 = document.getElementById("second-element");

//event trigger

eventlisteners();

function eventlisteners() {
    beat.addEventListener('click', goToBack);
}

// event functions

function goToBack() {

    text.innerText = '♥ => You';
    text2.innerText = '♥ => You';
    text3.innerText = '♥ => You';

}