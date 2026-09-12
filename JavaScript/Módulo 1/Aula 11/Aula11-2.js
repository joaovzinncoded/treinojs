const nome = "João Victor"
 console.log(`Meu nome é ${nome} e meu nome possui possui ${nome.length} letras`)

const soma = "ABCD".length
 console.log(soma)

//a concatenação length nos traz o tamanho em quantidade de caracteres de uma string

const quantidadeDeLetras = nome.replace(" ", "")
 console.log(`Meu nome é ${nome} e meu nome possui possui ${quantidadeDeLetras.length} letras`)

//a concatenação para mainpulação de string "replace" é usada para fazermos substituição de caracter
//sendo assim no exemplo, trocado " " por nada na string nome, dando a quantidade de letras no nome calculadas por length
//dando precisão ao texto, que descreve a quantidade de letras e não caracteres

console.log(nome.replace("ã", "X"))

//a concatenação replace funciona para qualquer tipo de substituição de caracter, no exemplo acima
//tem funcionalidade somente com o primeiro caracter identificado no dado referente

console.log(nome.replaceAll("o", "V"))

//a concatenação replaceALL faz a substituição de todo caracter identificado no dado referente

console.log(nome.toUpperCase()) // a concatenação traz a string em letras maiúsculas
console.log(nome.toLowerCase()) // a concatenação traz a string em letras minúsculas