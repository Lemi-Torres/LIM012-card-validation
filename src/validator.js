//validator es un objeto
const validator = { 

 //Declarar dentro del metodo isValid una variable llamada number la cuál va almacenar los números ingresados.
  isValid:(creditCardNumber)=> {

    //Declarar un const llamado arrayReverse el cual almacenara los números en orden inverso para aplicar el algoritmo de Luhn.
    const arrayReverse = creditCardNumber.toString().split('').reverse();
    //Declarar un const llamado arraySum para almacenar la suma de los digitos.
    const arraySum = [];

    //Aplicando el algoritmo de Luhn:
    if (creditCardNumber.length === 0) {
      alert('ERROR! No ingresó su número de tarjeta');
      return false;
    }
    //El método forEach() ejecutara la función indicada una vez por cada elemento del array,en orden.
    arrayReverse.forEach((e, i) => {
      
      if(i % 2 !== 0) {
        let numPar = e * 2;
        if(numPar >= 10) {          
          arraySum.push(
            numPar.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b))
          );
        } else {
          arraySum.push(numPar);
        }
      } else {
        arraySum.push(parseInt(e));
      }
    });

    
    const totalSum = arraySum.reduce((a, b) => a + b);
    if(totalSum % 10 === 0) {
      return true
    } else {   
      return false
    }  

  },

  maskify:(creditCardNumber)=> {
    const cardNumber = creditCardNumber.split('');
    for(let i=0; i<cardNumber.length -4;i++){
      cardNumber[i]='#';
    }
    return cardNumber.join('')
  }
 
 
};
export default validator;
