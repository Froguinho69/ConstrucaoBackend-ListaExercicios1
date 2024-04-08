/* 9- Faça um script para somar dois números e multiplicar o resultado pelo primeiro número. */
 
const prompt = require('prompt-sync')()

const numero1 = Number(prompt('Digite um número: '))
const numero2 = Number(prompt('Digite mais um número '))

let Soma = numero1 + numero2
let multiplicacao = Soma * numero1

console.log("Resultado é: ", multiplicacao)