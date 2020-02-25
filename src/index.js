import validator from './validator.js';
const cardNumberInput = document.getElementById('card-number-input');
const cardNumberOutput = document.getElementById('card-number-output');
const result = document.getElementById('result');

document.getElementById('segundo').style.display="none";
document.getElementById('tercero').style.display="none";
document.getElementById('result').style.display="none";


const btn1=document.getElementById('btn1');
btn1.addEventListener('click',() => {
    document.getElementById('primero').style.display="none";
    document.getElementById('segundo').style.display="block";
    document.getElementById('tercero').style.display="block";
});


const btn2=document.getElementById('btn2');
btn2.addEventListener('click',() => {
    result.innerHTML = `${validator.isValid(cardNumberInput.value) === true ? 'Tarjeta válida' : 'Tarjeta inválida'}`     
    cardNumberOutput.innerHTML=`${validator.maskify(cardNumberInput.value)}`
    
    document.getElementById('result').style.display="block";
     
});




