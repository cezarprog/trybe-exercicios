// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

// Adicione um valor ao saldo.

const saldo = 500.00;
const deposito = 150.00;

function sum(saldo, deposito) {
    return saldo + deposito;
}

const result = sum(saldo, deposito);
console.log(result);