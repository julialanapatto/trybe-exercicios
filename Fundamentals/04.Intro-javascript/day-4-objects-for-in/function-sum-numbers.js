function somaNumeros(numeros) {
    let numeroFinal = 0
    for (let index=0; index<=numeros; index +=1) {
        numeroFinal = numeroFinal + index;
    }
    return numeroFinal;
}
console.log(somaNumeros(5));