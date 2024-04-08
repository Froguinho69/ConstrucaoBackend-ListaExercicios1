/* 4- O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos(aplicados ao custo de fábrica). Supondo que o
percentual do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.*/ 
const prompt = require('prompt-sync')()

const fabricacao = Number(prompt('Qual o custo de fabricação do veículo? '))

const Distribuidor = 28
const impostos = 45

let CustosAdicionais = Distribuidor + impostos 
let TotalAdicionais = CustosAdicionais / 100

let CalculoCarro = fabricacao * TotalAdicionais 
let CustoFinal = fabricacao + CalculoCarro

console.log("O seu carro custará: ", CustoFinal)
