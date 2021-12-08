// const soma = function (num1, num2) {
//     return num1 + num2;
// }
// console.log(soma(2,2));

// const soma = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(soma(2,2));

// const soma = (num1, num2) => num1 + num2; //todo o corpo da função em uma única linha, tira o return e chaves
// console.log(soma(2,2));

// function contaPalavras (frase) {
//     return frase.split(' ').length;
// }
// console.log(contaPalavras('Fala tribo, beleza?'))

// const contaPalavras = (frase) => frase.split(' ').length;
// console.log(contaPalavras('Fala tribo, beleza?'))

// function objetoPessoa (nome, idade) {
//     return {
//         nome: nome,
//         idade: idade
//     }
// }
// console.log(objetoPessoa('Joaquim', 25))

/* const objetoPessoa = (nome, idade) => ({nome:nome, idade:idade}); //entre parenteses pq é objeto, se deixar só a chave ele fica achando que é o corpo da função
console.log(objetoPessoa('Joaquim', 25)) */

/* const printName = () => {
    const myName = "Lucas";
    return myName;
  }
  console.log(printName()); */
/* 
  const printName = () => "Lucas";
  console.log(printName()); */
/* 
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10)); */

const multiplication = (number, multi) => number * multi; //Em funções que recebem mais de um parâmetro, os parênteses não são omitido
console.log(multiplication(8, 10));