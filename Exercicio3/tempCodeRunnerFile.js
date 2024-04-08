const prompt = require('prompt-sync')();




const salarioMensal = Number(prompt('Qual o seu salario? '));
const percentual = Number(prompt('Qual o seu percentual? '));

let porcentagem = percentual / 100
let calculo = salarioMensal * porcentagem 
let novoSalario = salarioMensal + calculo

console.log(`Seu novo salario é: ${novoSalario}`)

/* O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, 
escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.*/ 

const custoCarro = Number(prompt('Qual o custo do carro de fabrica? '));

const distribuidor = 28; 
const impostos = 45;

let fabricaEimpostos = distribuidor + impostos 
let porcentagemCarro = fabricaEimpostos / 100

let calculoCarro = custoCarro * porcentagemCarro 
let custoCarroTotal = custoCarro + calculoCarro

console.log(`O valor final do seu carro é: ${custoCarroTotal}`)
