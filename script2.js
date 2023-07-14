// // Operadores Lógicos
// // OU (ll)
// // true ll true  = true
// //true  ll false = true 


// // E (&&)
// //true && true = true
// //true && false = false
// //

// // hoje tá chovendo  = true/verdade
// // hoje é terça = true

// //se hoje tá chovendo e hoje é terça
// //então eu vou ficar em casa

// //Quero validar se o número digitado pelo usúario
// //está no intervalo de 10 a 20

// let prompt = require('prompt-sync')();

// let numero = parseInt(prompt("Digite um número: "));

// if(numero >= 10 && numero <=20){
//     console.log("O numero informado está no intervalo desejado, estre 1")
// }else{
//     console.log("O número está fora do intervalo desejado!!!!!")
// }



let prompt = require('prompt-sync')();

let animal = prompt("Digite o nome do animal para saber o que ele tem a dizer: ")

switch(animal){
    case 'cachorro':
        console.log("au auuu")
        break;
    case 'gato':
        console.log("miauuuu")
        break;
    case 'vaca':
        console.log("muuuu")
        break;
    case 'papagaio':
        console.log("Voce foi a culpa desse amor ter acabado...")
        console.log("https://www.youtube.com/watch?v=wAs_kCFSiLO")
        break;
    default:
        console.log("Conheçoo não")
        break;
}
