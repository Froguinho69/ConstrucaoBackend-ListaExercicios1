/* 8- Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura */

const prompt = require('prompt-sync')()

const raio = Number(prompt('Qual o Raio? '))
const altura = Number(prompt('Qual a Altura? '))

const calculo = 3.14 * raio^2 * altura

console.log("O volume da caixa é: ", calculo.toFixed(2))