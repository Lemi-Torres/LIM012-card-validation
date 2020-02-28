//validator es un objeto que contiene dos metodos(acciones)
const validator = { 

 //dentro del Metodo isValid tenemos creditCardNumber con el número de tarjeta que se va a verificar.
  isValid:(creditCardNumber)=> {
    //APLICANDO LOGARITMO DE LUHN:
    //1-Declaramos una variable que almacenara los numeros convertidos en string y en orden inverso.
    let reverseArray = Array.from(creditCardNumber).reverse();
    //declarar una variable llamada arraySum para almacenar la suma de los digitos.
    let arraySum = 0;
    //2-Aplicar la operacion a los numeros de las posiciones pares.
    //mediante el for hacemos el recorrido
    for (let i = 0; i < reverseArray.length; i++){
      //verificamos que el numero sea par y de ser el caso multiplicar por 2
      if(i % 2 !== 0) {
        reverseArray[i] = reverseArray[i] * 2;
      }
      //3-Si la multiplicacion es mayor o igual a 10 restamos -9 para que le de la suma de los dos digitos.
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
  //en el Metodo maskify convertiremos el numero de tarjeta en # excepto los 4 ultimos numeros.
  maskify:(creditCardNumber)=> {
    //declaramos una variable que almacenara cada numero de la tarjeta de manera independiente.
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
