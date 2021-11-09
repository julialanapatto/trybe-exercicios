//Utilizando for , descubra qual o menor valor contido no array e imprima-o
//Using for , find the smallest value contained in the array and print it
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowest = numbers[0];
for (i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < lowest) {
        lowest = numbers[i]
    }
}
console.log(lowest);
