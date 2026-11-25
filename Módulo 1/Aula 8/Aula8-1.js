let numero1 = 8
let numero2 = "9"

let soma = numero1 + numero2
console.log(soma)

console.log (typeof soma)

soma =  numero1 + Number(numero2)
console.log(soma)

console.log(typeof soma)

//retorna na primeira soma dos dados 89 pois o numero 9 é classificado como string, typeof desta soma
//retorna string

//retorna na segunda soma dos dados 17 pois o numero 9 é classificado pelo comando Number antes de ser
//tratado, considerando o valor dentro das "", typeof desta soma retorna number

const string = "abc"
console.log(typeof Number(string))

//esta função transforma o dado tratado, no exemplo transformando uma string no retorno number com o 
//comando typeof transformando o dado tratado
