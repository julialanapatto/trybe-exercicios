//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.
const a = 20;
const b = 20;
console.log (a+b);
console.log (a-b);
console.log (a*b);
console.log (a/b);
console.log (a%b);

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const primeiroNumero = 45
const segundoNumero = 40
if (primeiroNumero>segundoNumero) {
    console.log ("O primeiro número é o maior")
}
else {
    console.log ("O segundo número é o maior")
};

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const numeroUm = 10;
const numeroDois = 15;
const numeroTres = 30;
if (numeroUm>numeroDois && numeroUm>numeroTres) {
    console.log ("O primeiro número é o maior")
}
else if  (numeroDois>numeroUm && numeroDois>numeroTres) 
{
    console.log ("O segundo número é o maior")
}
else{
    console.log ("O terceiro número é o maior")
};

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const number = 1100;

if (number>0) {
    console.log ("positive")
}
else if  (number<0) 
{
    console.log ("negative")
}
else{
    console.log ("zero")
};