/* 6- Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas.
Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. */

const prompt = require('prompt-sync')()

console.log("Calculo do salário final do vendedor")

const CarrosVendidos = Number(prompt("Informe a quantidade de carros vendidos no mês atual: "))
const TotalVendas = Number(prompt("Informe o valor total de suas vendas no mês atual: "))
const SalarioFixo = Number(prompt("Informe o valor do seu salário fixo: "))
const ComissaoPorCarroVendido = Number(prompt("Informe o valor da comissão recebida por cada carro vendido: "))

const ComissaoTotal = ComissaoPorCarroVendido * CarrosVendidos

const comissaoTotalVendas = TotalVendas * (5 / 100)

const salarioFinal = SalarioFixo + ComissaoTotal + comissaoTotalVendas

console.log("O salário será R$: ", salarioFinal.toFixed(2))