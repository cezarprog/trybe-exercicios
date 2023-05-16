// 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaXadrez = 'PEAO';

switch (pecaXadrez.toLowerCase()) {
    case 'bispo':
        console.log('bispo -> diagonal');
        break;
    case 'rainha':
        console.log('rainha -> em qualquer direção, quantas casas quiser');
        break;
    case 'rei':
        console.log('rei -> em qualquer direção, apenas uma casa');
        break;
    case 'cavalo':
        console.log('cavalo -> apenas em L, somente 4 casas');
        break;
    case 'torre':
        console.log('torre -> vertical e horizontal, quantas casas quiser');
        break;
    case 'peao':
        console.log('peao -> apenas para frente, uma casa');
        break;
    default:
        console.log('erro, peça invalida');
}