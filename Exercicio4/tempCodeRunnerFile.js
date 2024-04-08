const prompt = require('prompt-sync')();

const custoCarro = Number(prompt('Qual o custo do carro de fabrica? '));

const distribuidor = 28; 
const impostos = 45;

let fabricaEimpostos = distribuidor + impostos 
let porcentagemCarro = fabricaEimpostos / 100

let calculoCarro = custoCarro * porcentagemCarro 
let custoCarroTotal = custoCarro + calculoCarro

console.log(`O valor final do seu carro é: ${custoCarroTotal}`)
