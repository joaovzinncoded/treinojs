const nome = "João"
const cidade = "Uberlândia"
const idade = 19

let mensagem = "Olá! Meu nome é " + nome + " muito prazer, tenho " + idade + " anos e sou de " + cidade + ". E você?"
 console.log(mensagem)

//trabalhando com outra forma de manipular a string

mensagem = `Olá! Meu nome é ${nome} muito prazer, tenho ${idade} anos e sou de ${cidade}. E você?`
 console.log(mensagem)

//conseguimos tammbém quebrar a linha devido aos `` manipulando a string

mensagem = `Olá! Meu nome é ${nome} 
muito prazer, tenho ${idade} anos 
e sou de ${cidade}. 
E você?`
 console.log(mensagem)