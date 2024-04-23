//1- Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade, altura e peso. 

//criando variavel e pedindo informação
let nome = prompt("Digite seu nome: ")
let idade = prompt("Digite sua idade: ")
let altura = prompt("Digite sua altura: ")
let peso = prompt("Digite seu peso: ")

//2 - Salve essas informações em variáveis e a partir delas obtenha o ano de nascimento (considere o ano atual como 2024, desconsidere o mês) e o IMC do usuário.

//obtendo o ano de nascimento
let anoDeNascimento = 0
anoDeNascimento = 2024 - idade

//obtendo imc
let imc = 0
imc= peso / (altura * altura)

// 3- Exiba no console todas as informações.

console.log("Ola " + nome + ", você tem " + idade + " anos, nasceu em " + anoDeNascimento + ", tem " + altura + " de altura, pesa " + peso + " kg e seu IMC é " + imc + " Kg/m2.")

