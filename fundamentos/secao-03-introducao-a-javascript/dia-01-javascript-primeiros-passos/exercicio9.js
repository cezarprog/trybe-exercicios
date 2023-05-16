// 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

// Bônus: use somente um if.

let a = 2;
let b = 8;
let c = 4;

let condicao = false;

if ((a % 2 !==0 || b % 2 !== 0 || c % 2 !== 0)) {
    condicao = true;
};
console.log(condicao);