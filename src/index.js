import validator from './validator.js';

const creditCardNumber = document.getElementById('cardNumber');
const hideNumber = document.getElementById('hideNumber');
const result = document.getElementById('result');

//usamos el metodo 'getElementBiId' para seleccionar "btn1" y lo almacenaremos en una variable
const btn1=document.getElementById('btn1');
//acceder a btn1 mediante el metodo 'addEventListener'de tipo click(evento) y cuando haga click me ejecute la sgt.funcion
btn1.addEventListener('click',() => {
    document.getElementById('primero').style.display="none";
    document.getElementById('segundo').style.display="block";
    document.getElementById('tercero').style.display="block";
});

//usamos el metodo 'getElementBiId' para seleccionar "btn1" y lo almacenaremos en una variable
const btn2=document.getElementById('btn2');
//acceder a btn1 mediante el metodo 'addEventListener'de tipo click(evento) y cuando haga click me envie los msjes.
btn2.addEventListener('click',() => { 
    if (!creditCardNumber.value.length) {
        alert('ERROR! No ingresó su número de tarjeta'); 
    }else{
     result.innerHTML = `${validator.isValid(creditCardNumber.value) === true ? 'Tarjeta válida' : 'Tarjeta inválida'}`     
     hideNumber.innerHTML=`${validator.maskify(creditCardNumber.value)}`
     //dejamos mostrar el resultado
     document.getElementById('result').style.display="block";
    } 
});




