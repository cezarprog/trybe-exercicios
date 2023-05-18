// EXEMPLO 1 - FUNÇÕES

// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

// Adicione um valor ao saldo.
// Subtraia um valor do saldo.
// Multiplique o valor do saldo por uma taxa.
// Divida o valor do saldo.

const saldo = 10000.00;

// function sum(saldo, num2) {
//     return saldo + num2;
// }

// const result = sum(saldo, 1500.00);

// console.log(result);

// const saldo = 10000.00;

function sum(saldo, num2) {
    return saldo - num2;
}

const result = sum(saldo, 1500.00);

console.log(result);