// 3- Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

const prompt = require('prompt-sync')()

const SalarioMensal = Number(prompt('Qual o seu salario? '))
const percentual = Number(prompt('Qual o percentual de reaguste? '))

let porcentagem = percentual / 100
let calculo = SalarioMensal * porcentagem 
let NovoSalario = SalarioMensal + calculo

console.log("Seu novo salario é:", NovoSalario)

