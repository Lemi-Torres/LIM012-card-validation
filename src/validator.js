//validator es un objeto que contiene dos metodos(acciones)
const validator = { 
  isValid:(creditCardNumber)=> {
    //1-Declaramos una variable que almacenara los numeros en orden inverso 
    let reverseArray = creditCardNumber.split('').reverse();
    let arraySum = 0;
    //2-Aplicar la operacion a los numeros de las posiciones pares.
    for (let i = 0; i < reverseArray.length; i++){
      if(i % 2 !== 0) {
        reverseArray[i] = reverseArray[i] * 2;
      }
      //3-Si el doble de ese numero es mayor o igual a 10 restamos -9 para que le de la suma de los dos digitos
      if(reverseArray[i] >= 10) {          
        reverseArray[i] = reverseArray[i]-9;
      } 
      arraySum += parseInt(reverseArray[i]);
    }
    //4-Comprobamos si la tarjeta es valida o invalida.  
    if(arraySum % 10 === 0 ) {
      return true;
    }else{
     return false;
    }
  },

  maskify:(creditCardNumber)=> {
   const cardNumber = creditCardNumber.split('');
    //ocultaremos todos los numeros excepto los 4ultimos.
   for(let i=0; i<cardNumber.length -4;i++){
     //los reemplazaremos por #
     cardNumber[i]='#';
    }
    //devolver la cadena
    return cardNumber.join('')
  }
};

export default validator;