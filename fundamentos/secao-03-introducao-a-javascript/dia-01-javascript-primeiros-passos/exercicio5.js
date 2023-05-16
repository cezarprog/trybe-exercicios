// 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let alfa = 60;
let beta = 60;
let gama = 60;

if (alfa <= 0 || beta <= 0 || gama <= 0){
    console.log('erro');
} else if (alfa + beta + gama > 180){
    console.log('false');
} else if (alfa + beta + gama <= 180){
    console.log('true');
}