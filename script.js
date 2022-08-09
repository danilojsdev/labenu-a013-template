// com ifs aninhados
// const idadeDependente=Number(prompt("Solicitação de dependente \n Qual a idade do dependente"))

// if(idadeDependente>=13){
//     if(idadeDependente<18){
//         console.log("Seu filho já pode ter um acartão vinculado ao seu");
//     }else{
//         console.log("Consulte outras possibilidades do Labank");
//     }
// }else{
//     console.log("Consulte outras possibilidades do Labank");
// }
// com if e operadores lógicos
// if(idadeDependente>=13 && idadeDependen

// console.log('Prática Guiada 2')

// console.log(idadeDependente===13? 'A idade do dependente é 13 e já pode ter um cartão': "Verifique as opções possíveis")

// console.log('Prática Guiada 3 - switch-case')

// const numeroRamal = Number(prompt('Solicitação de Cartão de Crédito \n 1- Fácil \n 2- Black \n 3- Platinum \n 4- Master Gold'))

// switch(numeroRamal){
//     case 1:
//         console.log('Cartão Fácil adquirido')
//         break;
//     case 2:
//         console.log('Cartão Black adquirido')
//         break;
//     case 3:
//         console.log('Cartão Platinum adquirido')
//         break;
//     case 4:
//         console.log('Cartão Master Gold adquirido')
//         break;
//     default:
//         console.log('Escolha uma das opções disponíveis')
//         }

// Exercício de fixação:

const num1 = Number(prompt('Escreva um número:'));

// if(num1 % 2 ===0){
//   console.log('O número é divisivel por 2.')
//     }if(num1 % 3 === 0){
//     console.log('O número é divisivel por 3.')
//     console.log(num1===30? 'Ufa acertei!' : "não foi dessa vez:")
//     }else{
//     console.log('O número não é divisível por 3.')
// }else{
//   console.log('O número não é divisível por 2.')
// }

if(num1 % 2 === 0 && num1 % 3 === 0){
    console.log('O número é divisível por 2 e 3.')
    console.log(num1===30? 'Ufa acertei!' : "não foi dessa vez:")
}else{
    console.log('O número não é divisível por 2 e 3.')
}

switch(num1){
    case 6: 
        console.log('Você digitou o número 6.')
        break;
    case 12:
        console.log('Você digitou o número 12.')
        break;
    case 18:
        console.log('Você digitou o número 18.')
        break;
    case 24:
        console.log('Você digitou o número 24.')
        break;
    case 30:
        console.log('Você digitou o número 30.')
        break;
    default:
        console.log('O número é maior que 30 ou menor que 6.')
}