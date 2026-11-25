//Questão 4) Leia o enunciado abaixo:
//“O SAC da Voitto prioriza pessoas com mais de 60 anos para o
//atendimento. Para isso ela verifica se você tem no mínimo 60 anos,
//caso isso seja verdade ela te encaminha para a fila preferencial. Caso
//não, ela pede para você aguarda o atendimento na fila.”
//Utilize o operador ternário para verificar essa condição.

let idade = 74

if (idade >= 60) {
    console.log("Aguarde na fila preferêncial...")
} else {
    console.log("Aguarde na fila...")
}

//convertendo para operadores ternários

idade = 65

const mensagem = idade >= 60
 ? "Aguarde na fila preferêncial..."
 : "Aguarde na fila..."

 console.log(mensagem)