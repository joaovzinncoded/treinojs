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