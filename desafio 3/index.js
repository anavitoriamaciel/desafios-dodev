//1.1 - Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade, se possuí carta de motorista e se tem algum carro.
//1.2 - Se o usuário não for maior de idade ou não tiver carta exiba no console: "Giovanni, você não pode dirigir".
//1.3 - Se o usuário for maior de idade, tiver carta mas não tiver carro exiba no console: "Giovanni, você pode dirigir mas não tem um carro".
//1.4 - Se o usuário for maior de idade, tiver carta e carro exiba no console: "Giovanni, você será o motorista!"

//criando variaveis e pedindo informação(1)
const nome = prompt("Qual seu nome?")
const idade = prompt("Qual sua idade?")
const carta = prompt("Você tem carteira de motorista? (s/n) ")
const carro = prompt("Você tem carro? (s/n) ")

//criando condições(2,3,4)
if (idade < 18 || carta === "n"){
    console.log (nome + ", você não pode dirigir.")
} else if(idade >= 18 && carta === "s" && carro === "n" ){
    console.log(nome + ", você pode dirigir mas não tem um carro.")
} else if(idade >= 18 && carta === "s" && carro === "s"){
    console.log(nome + ", você será o motorista!")
}
