// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//For the third exercise, calculate and print the arithmetic mean of the values ​​contained in the array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (i = 0; i<numbers.length; i+=1) {
    result += numbers[i];
}

result = result / numbers.length; 
    console.log(result);
