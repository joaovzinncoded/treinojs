const numeros = [1, 54, 147, 13, 254, 60, 77, 86, 19, 10]
const numerosPares = numeros.filter(numeros => (numeros % 2 == 0))

console.log(numerosPares)
 //os números acima são números pares

const numerosImpares = numeros.filter(numeros => (numeros % 2 == 1))
console.log(numerosImpares)
 //os numeros acima são impares