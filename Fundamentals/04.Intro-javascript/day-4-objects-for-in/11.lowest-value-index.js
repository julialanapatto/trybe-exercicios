//11. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
//Valor esperado no retorno da função: 6 .

function lowest (numbers) {
    let lowest = 0;
    for (let index in numbers) {
      if (numbers[lowest] > numbers [index]) {
        lowest = index;
      }
    }
    return lowest;
  }
  
  console.log(lowest([2, 4, 6, 7, 10, 0, -3]));