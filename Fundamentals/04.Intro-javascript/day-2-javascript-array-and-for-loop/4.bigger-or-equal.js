//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
//With the same code as the previous exercise, if the final value is greater than 20, print the message: "value greater than 20". If not, print the message: "value less than or equal to 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (i = 0; i<numbers.length; i+=1) {
    result += numbers[i];
}

result = result / numbers.length;
if (result > 20) {
    console.log(">= 20")
} else {
    console.log("<= 20")
}