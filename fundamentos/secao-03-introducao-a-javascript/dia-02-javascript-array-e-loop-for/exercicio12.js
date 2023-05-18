// Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

let n = 2
let inputLine = '';
let symbol = '*'

for (let index = 0; index < n; index +=1){
    inputLine = inputLine + symbol;
}

for (let index = 0; index < n; index +=1){
    console.log(inputLine);
}
