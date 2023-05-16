// 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

// Bônus: use somente um if.

let a = 3;
let b = 8;
let c = 9;

let condicao = false;

if ((a % 2 ===0 || b % 2 === 0 || c % 2 === 0)) {
    condicao = true;
};
console.log(condicao);