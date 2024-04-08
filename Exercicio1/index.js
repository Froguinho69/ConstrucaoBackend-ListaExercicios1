/* 1- Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e 
a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0. */

const prompt = require('prompt-sync')()

const nota1 = Number(prompt("Nota 1: "))
const nota2 = Number(prompt("Nota 2: "))
const nota3 = Number(prompt("Nota 3: "))
const nota4 = Number(prompt("Nota 4: "))

const media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7) {
        console.log("média:", media, " = Aprovado");
    } else {
        console.log("média:", media, " = Reprovado");
    }