let idade = 15
let pais = "EUA"
let resultado

if ((idade >= 18) || (idade >= 16 && pais === "EUA"))  {
    resultado = "Aprovado"
} else {
    resultado = "Reprovado"
}

console.log(resultado)

// podemos também

idade = 18
pais = "EUA"

if ((idade >= 18) ||  (idade >= 16 && pais === "EUA")) {
    resultado = "Aprovado"
} else {
    resultado = "Reprovado"
}

//podemos também

let resutado = (
    idade >= 18 ?
    "Aprovado" : (
        pais === "EUA" && idade >= 16) ?
        "Aprovado" : 
        "Reprovado"
    )