//throw e try/catch
/* const sum = (value1, value2) => value1 + value2;
console.log(sum(2,3)); */
/* const sum = (value1, value2) => value1 + value2;

console.log(sum(2,'3')); resultado 23 a sua função, ao perceber que estava fazendo uma operação com parâmetros de tipos distintos, tentou adaptá-los para que o código não quebrasse - no caso, o primeiro parâmetro foi convertido para uma string , e a operação realizada foi uma concatenação de strings através do sinal de + .*/
/* 
const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      return 'Os valores devem ser numéricos';
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3')); resultado os valores devem ser numéricos */

 /*  const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3')); */
  const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos'); //não é um número, o código lança um erro com o throw 
    }
  };//verifica se os parâmetros passados são números
  
  const sum = (value1, value2) => {
    try { //tenta fazer a soma de dois valores.
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      throw error.message; //Dentro do catch retornamos a chave error.message
    }
  };
  
  console.log(sum(2, '3'));

