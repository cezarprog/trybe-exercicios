// Divida o valor do saldo.

const saldo = 500.00;
const parcelas = 84;

function valorParcelas(saldo, parcelas){
    return saldo / parcelas;
}

const result = valorParcelas(saldo, parcelas);
console.log(result);