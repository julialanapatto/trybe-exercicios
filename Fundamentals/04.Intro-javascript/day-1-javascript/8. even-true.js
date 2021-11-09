//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false 
//Write a program that defines three numbers as constants and returns true if at least one of the three is even. otherwise it returns false
const a = 1;
const b = 4;
const c = 6;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}