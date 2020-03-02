import validator from './validator.js';

const creditCardNumber = document.getElementById('cardNumber');
const hideNumber = document.getElementById('hideNumber');
const result = document.getElementById('result');

//acceder a btn1 mediante el metodo 'addEventListener'de tipo click y cuando haga click me ejecute la sgt.funcion
const btn1=document.getElementById('btn1');
btn1.addEventListener('click',() => {
    document.getElementById('primero').style.display="none";
    document.getElementById('segundo').style.display="block";
    document.getElementById('tercero').style.display="block";
});

//mediante el evento click enviaremos un alert,msje de validacion e invalidacion segun el caso.
const btn2=document.getElementById('btn2');
btn2.addEventListener('click',() => { 
    if (!creditCardNumber.value.length) {
        alert('ERROR! No ingresó su número de tarjeta'); 
    }else{
     result.innerHTML =  `${validator.isValid(creditCardNumber.value) === true ? 'Tarjeta válida' : 'Tarjeta inválida'}`     
     hideNumber.innerHTML=`${validator.maskify(creditCardNumber.value)}`
    
     document.getElementById('result').style.display="block";
    } 
});