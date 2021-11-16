//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1]; .
//Valor esperado no retorno da função: 4 .
//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1]; .
//Valor esperado no retorno da função: 4 .

function highest (numbers) {
    let highest = 0;
    for (let index in numbers) {
      if (numbers[highest] < numbers [index]) {
        highest = index;
      }
    }
    return highest;
  }
  
  console.log(highest([2, 3, 6, 7, 10, 1]));