import validator from './validator.js';

const creditCardNumber = document.getElementById('cardNumber');
const hideNumber = document.getElementById('hideNumber');
const result = document.getElementById('result');

<<<<<<< HEAD
//usamos el metodo 'getElementBiId' para seleccionar "btn1" y lo almacenaremos en una variable
=======
//acceder a btn1 mediante el metodo 'addEventListener'de tipo click y cuando haga click me ejecute la sgt.funcion
>>>>>>> d5282796200d6d998eb136b10f8f1156ae45c270
const btn1=document.getElementById('btn1');
//acceder a btn1 mediante el metodo 'addEventListener'de tipo click(evento) y cuando haga click me ejecute la sgt.funcion
btn1.addEventListener('click',() => {
    document.getElementById('primero').style.display="none";
    document.getElementById('segundo').style.display="block";
    document.getElementById('tercero').style.display="block";
});

<<<<<<< HEAD
//usamos el metodo 'getElementBiId' para seleccionar "btn1" y lo almacenaremos en una variable
const btn2=document.getElementById('btn2');
//acceder a btn1 mediante el metodo 'addEventListener'de tipo click(evento) y cuando haga click me envie los msjes.
=======
//mediante el evento click enviaremos un alert,msje de validacion e invalidacion segun el caso.
const btn2=document.getElementById('btn2');
>>>>>>> d5282796200d6d998eb136b10f8f1156ae45c270
btn2.addEventListener('click',() => { 
    if (!creditCardNumber.value.length) {
        alert('ERROR! No ingresó su número de tarjeta'); 
    }else{
<<<<<<< HEAD
     result.innerHTML = `${validator.isValid(creditCardNumber.value) === true ? 'Tarjeta válida' : 'Tarjeta inválida'}`     
     hideNumber.innerHTML=`${validator.maskify(creditCardNumber.value)}`
     //dejamos mostrar el resultado
     document.getElementById('result').style.display="block";
    } 
});




=======
     result.innerHTML =  `${validator.isValid(creditCardNumber.value) === true ? 'Tarjeta válida' : 'Tarjeta inválida'}`     
     hideNumber.innerHTML=`${validator.maskify(creditCardNumber.value)}`
    
     document.getElementById('result').style.display="block";
    }
});
>>>>>>> d5282796200d6d998eb136b10f8f1156ae45c270
