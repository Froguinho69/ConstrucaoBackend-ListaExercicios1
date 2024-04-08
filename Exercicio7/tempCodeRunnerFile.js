const prompt = require('prompt-sync')();






const notaUm = Number(prompt('Qual sua nota 1? '));
const notaDois = Number(prompt('Qual sua nota 2? '));


let calculo1 = notaUm * 0.4;
let calculo2 = notaDois * 0.6;


let mediaFinal = calculo1 + calculo2


console.log(`Sua media final é: ${mediaFinal}`)