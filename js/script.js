const kopje = document.querySelector('p');

console.log(kopje);
kopje.innerHTML = "niks";


const par = document.getElementsByClassName('paragraph');
console.log(par);

const allpar = document.querySelectorAll('div');
console.log(allpar);

const thisell = document.getElementById('first-section').nextElementSibling;
console.log(thisell);

const thisChild = document.getElementById('first-section').lastElementChild;
console.log(thisChild);

console.log(thisChild.parentElement.parentNode);
