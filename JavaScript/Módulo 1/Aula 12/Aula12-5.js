//podemos também complementar outras formas de argumentação da função

function darUmAlo() {
    nome = "João"
    console.log(`Olá ${nome} `)
}

darUmAlo()

//podemos também argumentar mais de uma vez dentro da função

function despedir (nome = "João", periodo) {
    console.log(`Olá ${nome}, boa ${periodo}`)
}

despedir(nome, "tarde")

//dado parâmetro dentro da função e o argumento fora da função
//com a função nome já classificada dentro do escopo