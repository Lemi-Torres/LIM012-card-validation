import validator from './validator.js';
const cardNumberInput = document.getElementById('card-number-input');
const cardNumberOutput = document.getElementById('card-number-output');
cardNumberInput.addEventListener('input',(cardNumberOutput));
const result = document.getElementById('result');
const maskifynumber = document.getElementById('maskifynumber');

document.getElementById('segundo').style.display="none";
document.getElementById('tercero').style.display="none";
document.getElementById('result').style.display="none";

const btn1=document.getElementById('btn1');
btn1.addEventListener('click',() => {
    document.getElementById('primero').style.display="none";
    document.getElementById('segundo').style.display="block";
    
});

const btn2=document.getElementById('btn2');
btn2.addEventListener('click',() => {
    document.getElementById('segundo').style.display="none";
    document.getElementById('tercero').style.display="block";
  
});

const btn3=document.getElementById('btn3');
btn3.addEventListener('click',() => {
    result.innerHTML = 
    `
      <p ${validator.isValid(cardNumberInput.value) === true ? 'valid-text">Tarjeta válida' : 'invalid-text">Tarjeta inválida'}</p>     
      `
      document.getElementById('result').style.display="block";
      maskifynumber.innerHTML=validator.maskify(cardNumberInput.value)

});
