//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
//A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//INSS (Instituto Nacional do Seguro Social)
//Salário bruto até R$ 1.556,94: alíquota de 8%
//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//IR (Imposto de Renda)
//Até R$ 1.903,98: isento de imposto de renda
//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
//Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
//O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
//Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
//Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
//R$ 2.670,00: salário com INSS já deduzido;
//7.5%: alíquota de imposto de renda;
//R$ 142,80 parcela a se deduzir do imposto.
//Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
//O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
//Resultado: R$ 2.612,55.
//Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?


// A person who works with a formal contract in Brazil has the INSS and the IR deducted from their gross salary. Make a program that, given a gross salary, calculates the net to be received.
//The notation for a salary of $1500.10, for example, should be 1500.10. For tax ranges, use the following references:
//INSS (National Social Security Institute)
// Gross salary up to R$ 1,556.94: 8% rate
// Gross salary from BRL 1,556.95 to BRL 2,594.92: 9% rate
// Gross salary from BRL 2,594.93 to BRL 5,189.82: 11% rate
// Gross salary above BRL 5,189.82: maximum rate of BRL 570.88
//IR (Income Tax)
// Up to R$1,903.98: exempt from income tax
//From BRL 1,903.99 to 2,826.65: rate of 7.5% and portion of BRL 142.80 to be deducted from the tax
// From BRL 2,826.66 to BRL 3,751.05: 15% rate and a portion of BRL 354.80 to be deducted from the tax
// From BRL 3,751.06 to BRL 4,664.68: rate of 22.5% and installment of BRL 636.13 to be deducted from the tax
//Above R$ 4,664.68: 27.5% rate and a portion of R$ 869.36 to be deducted from the tax.
//Example: A person has a gross salary of R$3,000.00. The calculation will be:
//The gross salary is between R$2,594.93 and R$5,189.82, so its rate for INSS is 11%. The INSS will be 11% of R$3,000, that is, R$330.00.
//To find the base salary, subtract the INSS rate from the gross salary: BRL 3,000.00 - BRL 330.00 = BRL 2,670.00.
//To get the amount of the IR, we have a salary (already deducting the INSS) between BRL 1,903.99 and 2,826.65, the rate then being 7.5%, with a portion of BRL 142.80 to be deducted from the tax. So we have:
//R$ 2,670.00: salary with INSS already deducted;
//7.5%: income tax rate;
//R$ 142.80 installment to be deducted from the tax.
// Doing the math, we have: (7.5% of BRL 2,670.00) - BRL 142.80 = BRL 57.45
//The last calculation to get the net salary is BRL 2,670.00 - BRL 57.45 (base salary - IR value) = BRL 2,612.55.
//Result: BRL 2,612.55.
//Hint: how about identifying the aliquots with explanatory name variables?