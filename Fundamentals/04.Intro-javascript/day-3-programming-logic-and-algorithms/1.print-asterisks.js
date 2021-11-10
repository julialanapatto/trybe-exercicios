//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n 
//For today's first exercise, write a program that, given any value n, whether n > 1 , prints a square made of side asterisks of size n on the screen

let n = 10;
let asteriks = "*";
let line=""
for (i=0; i<n; i+=1){
    line = line + asteriks;
}
for (i=0; i<n; i+=1){
    console.log(line)
}
