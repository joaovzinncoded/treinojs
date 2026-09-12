//Crie uma função onde é passado por parâmetro a
//temperatura em Celsius e ela te retorne o valor em Fahrenheit.

function temperatura (celsius = 20) {
    const F = (((celsius * 9) / 5) + 32)
    console.log(`A temperatura Celsius quando transformada em Fahrenheit é dado o valor ${F}`)
}

temperatura()