// EXEMPLO FOR DENTRO DE FOR
let qtd = 10;
let ingredientes = ["queijo", "presunto", "maionese"];
let sacola = [];
let pao = [];
for (let index = 0; index < 10; index += 1) {
    //console.log('exectuou fora: ', index)

    for (let index = 0; index < ingredientes.length; index += 1) {

        pao.push(ingredientes[index])
    }
    sacola.push(pao);

}
console.log('exectuou dentro: ', sacola);