/* 2- Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. 
Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. */

const prompt = require('prompt-sync')()

const VotosBrancos = Number(prompt('Votos brancos? '))
const VotosNulos = Number(prompt('Votos nulos? '))
const VotosValidos = Number(prompt('Votos validos? '))

let TotalEleitores = VotosBrancos + VotosNulos + VotosValidos

let PorcentagemBrancos = (VotosBrancos / TotalEleitores) * 100
let PorcentagemNulos = (VotosNulos/ TotalEleitores) * 100
let PorcentagemValidos = (VotosValidos / TotalEleitores) * 100

console.log("Total de eleitores:", TotalEleitores)
console.log(`
Votos brancos: ${PorcentagemBrancos}%
Votos nulos: ${PorcentagemNulos}%
Votos validos: ${PorcentagemValidos}%
`)
