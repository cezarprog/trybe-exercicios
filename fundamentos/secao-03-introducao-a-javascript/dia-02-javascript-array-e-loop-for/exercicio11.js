// 11 - Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'cezar eduardo';
let reverseWord = '';

for (let index = 0; index < word.length; index +=1) {
    reverseWord += word[word.length - 1 - index]; 
}

console.log(reverseWord);