console.log("Exemplo 4")
let prompt = require("prompt-sync")();

//sanake_case
// PascalCase
//camelCase

let primeiraNota = parseFloat( prompt("Digite a primeira nota: ") )
let segundaNota = parseFloat( prompt("Digite a segunda nota: ") )

let soma = primeiraNota + segundaNota

let media = soma / 2

console.log("A média dos alunos que vão embora antes da hora é: " + media)