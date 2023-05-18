// Multiplique o valor do saldo por uma taxa.

const saldo = 500.00;
const taxaJuros = 0.1;

function juros(saldo, taxaJuros){
    return saldo * taxaJuros;
}

const result = juros(saldo, taxaJuros);
console.log(result);