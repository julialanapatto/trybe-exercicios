//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
//For the second exercise, select all the values ​​contained in the array and print the result;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (i = 0; i<numbers.length; i+=1) {
    result += numbers[i];
}
console.log(result)
