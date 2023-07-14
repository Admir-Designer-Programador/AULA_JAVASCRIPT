

// comand.log ("Lista Ex 1")

// let prompt = require('prompt-sync')();

// let funcionario = prompt("Digite o seu nome: ")

// let Cargo = prompt("Digite o seu cargo: ")
// let salario = parseFloat(prompt("Digite o seu salario: "))


// if(salario < 1000 ){
//     salario *=1.1
//     console.log("Seu novo salario é de: R$" + salario);
// } 
// else {
//     console.log("Salário: R$" + salario.toFixed(3))
// }

       
// comand.log ("Lista Ex 2")

// let prompt = require('prompt-sync')();

// let funcionario2 = prompt ("Digite o seu nome: ")
// let salario2 = parseFloat (prompt("Digite o seu salario: "))


//Calcular o acrecimo

// if(salario2 < 500 ){
//     salario2 *=1.3
//     console.log(`Seu novo salario é de: R$${salario2},` + salario2);
// } 
// else {
//     // Exibe Mensagem
//     console.log("Vc não tem direito ao aumento")
// }

// comand.log ("Lista Ex 3)

// let prompt = require("prompt-sync")();

// let numeroInteiro = parseInt(prompt("Digite o numero Inteiro: "))

// if(numeroInteiro > 0){
   
//     console.log("Seu numero é positivo: ");
// } 

// else if(numeroInteiro < 0 )[
//     console.log("O numero é negativo")
// ]

// else 
// {
//     console.log("Seu numero é Zero:")
// }


// comand.log ("Lista Ex 4)

// let prompt = require('prompt-sync')()

//  // numeroInteiro dividido por 2 == 0 será par

// let numero = parseInt(prompt("Digite um número inteiro: "))

// if (numero % 2 == 0) {

//     // numeroInteiro dividido por 2 == 1 será inpar

//     console.log("O número é par")
// } else {
//     console.log("O número é impar")
// }


// comand.log ("Lista Ex 5)

// let prompt = require('prompt-sync')()

// let primeiroNumero = parseInt( prompt('Digite o primeiro numero: ') )
// let segundoNumero = parseInt( prompt('Digite o segundo numero: ') )

// if (primeiroNumero > segundoNumero) {
//     console.log("O numero " + primeiroNumero + " é maior que " + segundoNumero)
// } else if (segundoNumero > primeiroNumero){
//     console.log("O numero " + segundoNumero + " é maior que " + primeiroNumero)
// } else {
//     console.log(`Os números ${primeiroNumero} e ${segundoNumero} são iguais`)
// }

// comand.log ("Lista Ex 6)

// / 1. Receber 4 notas
// let prompt = require('prompt-sync')()

// let nota1 = parseFloat( prompt('Digite a primeira nota: ') )
// let nota2 = parseFloat( prompt('Digite a segunda nota: ') )
// let nota3 = parseFloat( prompt('Digite a terceira nota: ') )
// let nota4 = parseFloat( prompt('Digite a quarta nota: ') )

// // 2. Calcular a média das notas
// let media = (nota1 + nota2 + nota3 + nota4) / 4

// // 3. Imprimir a média
// console.log(media)

// // 4. Classificar a média

// // SE média maior ou igual à 7 -> Mostrar msg APROVADO
// // SENÃO SE média menor que 7 E média maior ou igual 5 -> Mostrar msg RECUPERAÇÃO
// // SENÃO -> Mostrar msg REPROVADO

// if (media >= 7) {
//     console.log("Aprovado")
// } else if (media < 7 && media >= 5) {
//     console.log("Recuperação")
// } else {
//     console.log("Reprovado")
// }

// comand.log ("Lista Ex 7)
// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "Admin"; e a senha é "senha123";. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

// let prompt = require('prompt-sync')()

// let nome= prompt("Digite o seu nome: ")
// let senha = prompt('Digite a senha: ')

// if (nome == "Admin" && senha == "senha123") {
//     // Usuario permitido
//     console.log("Aprovado")
// } else {
//         console.log("Reprovado")
// }

// comand.log ("Lista Ex 8)

// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.


// let prompt = require('prompt-sync')()

// let semana = parseInt(prompt("Digite o Numero de 1 a 7: "))

// switch (semana) {
//     case 1:
//     console.log("segunda-feira");
//     break;

//     case 2:
//     console.log("terça-feira");
//     break;

//     case 3:
//     console.log("quarta-feira");
//     break;

//     case 4:
//     console.log("quinta-feira");
//     break;

//     case 5:
//     console.log("sexta-feira");
//     break;

//     case 6:
//     console.log("sábado");
//     break;

//     case 7:
//     console.log("domingo");
//     break;

//     default:

//     console.log("Valor digitado esta errado");
//     break;
// }

// comand.log ("Lista Ex 9)

// Exercício 3: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.


// let prompt = require("prompt-sync")();

// let primeiroNumero = parseInt(prompt("Digite primeiro Numero: "))
// let segundoNumero = parseInt(prompt("Digite segundo Numero: "))
// let terceiroNumero = parseInt(prompt("Digite terceiro Numero: "))

// if(primeiroNumero < segundoNumero && segundoNumero < terceiroNumero){
   
//     console.log("Seu Numero está na ordem crescente: ");
// } 
// else {
//     console.log("Os Numeros nào estáo em  ordem crescente")
// }

