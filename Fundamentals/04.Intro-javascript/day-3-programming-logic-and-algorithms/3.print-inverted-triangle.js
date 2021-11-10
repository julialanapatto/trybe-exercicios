//Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Agora inverta o lado do triângulo
//Do the same as before, but print a right triangle with 5 base asterisks.Now reverse the triangle side.

let n = 5;

for (let index = 0; index < n; index += 1) {
    let image = '';
    for (cont = n-1 ; cont > index; cont -=1) {
    image = image + '';
    }
        for (cont=0 ; cont <= index; cont += index) {
            image = image +'*';
        }
        console.log(image)
    }
