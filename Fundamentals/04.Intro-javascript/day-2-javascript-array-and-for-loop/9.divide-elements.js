//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 
//Using the array created in the previous exercise, print the result of dividing each element by 2

let result = [];
for (i = 1; i <= 25; i += 1) {
  result.push(i);
}
for (i = 0; i < result.length; i += 1) {
  console.log(result[i] / 2);
}