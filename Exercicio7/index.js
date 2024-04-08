/* 7- Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 4 e 6. */

const prompt = require('prompt-sync')()
const nota1 = Number(prompt('Qual sua nota 1? '))
const nota2 = Number(prompt('Qual sua nota 2? '))

let peso1 = nota1 * 0.4
let peso2 = nota2 * 0.6

let mediaFinal = peso1 + peso2

console.log("Essa é sua média final: ", mediaFinal)