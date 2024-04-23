//1.1 - Crie um sistema que pergunte ao seu usuário se ele está com fome, se tem dinheiro e se o restaurante está aberto.
//1.2 - Se estiver sem fome ou sem dinheiro exiba no console: "Hoje a janta será em casa"
//1.3 - Se estiver com fome e tiver dinheiro mas o restaurante estiver fechado exiba no console: "Peça um delivery!"
//1.4 - Se estiver com fome, tiver dinheiro e o restaurante estiver aberto exiba no console: "Hoje o jantar será no seu restaurante preferido!"

// criando variaveis e pedindo informação(1)
const fome = prompt("Você esta com fome? (s/n)")
const dinheiro = prompt("Você tem dinheiro? (s/n)")
const restaurante = prompt("O restaurante está aberto? (s/n)")

// fazendo as condicionais(2,3,4)
// || = ou && = e
if (fome == "n" || dinheiro == "n" ){
    console.log("Hoje a janta será em casa")
}else if (fome == "s" && dinheiro == "s" && restaurante == "n"){
    console.log("Peça um delivery!")
}else if(fome == "s" && dinheiro == "s" || restaurante == "s"){
    console.log("Hoje o jantar será no seu restaurante preferido!")
}