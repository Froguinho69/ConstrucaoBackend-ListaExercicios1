const prompt = require('prompt-sync')();




const numeroUm = Number(prompt('Numero um: '));
const numeroDois = Number(prompt('Numero Dois '));

let calculo = numeroUm + numeroDois; 
let multiplicar = calculo * numeroUm; 

console.log(`Resultado da multiplicação: ${multiplicar}`)