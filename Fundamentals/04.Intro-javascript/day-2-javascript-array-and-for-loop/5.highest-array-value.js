//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
//Using for, find the biggest value contained in the array and print it;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let highest=0;
for ( i=0; i<numbers.length; i +=1) {
if (numbers[i] > highest) {
    highest= numbers[i]
}
}
console.log(highest);