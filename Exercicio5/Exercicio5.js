/* 5- O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
 Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor*/

const prompt = require('prompt-sync')()

const fabricacao = Number(prompt('Qual o custo de fabricação do veículo? '))
const Distribuidor = Number(prompt('Qual a porcentagem cobrada pelo distribuidor? '))
const impostos = Number(prompt('Qual a porcentagem dos impostos na sua região? '))

let CustosAdicionais = Distribuidor + impostos 
let TotalAdicionais = CustosAdicionais / 100

let CalculoCarro = fabricacao * TotalAdicionais 
let CustoFinal = fabricacao + CalculoCarro

console.log("O seu carro custará: ", CustoFinal)
