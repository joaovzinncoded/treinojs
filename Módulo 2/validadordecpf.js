let cpf = [3, 2, 1, 7, 8, 6, 2, 4, 7];
const validador = [10, 9, 8, 7, 6, 5, 4, 3, 2];

function somacpf() {
 let soma = cpf.map((cpf, indice) => cpf * validador[indice])
    return soma
}
function somatotalcpf() {
  return (somacpf().reduce((soma, number) => soma + number, 0))
}

function divisaoCpf() {
    return Math.floor(somatotalcpf() / 10)
}

function divisaoCpf2() {
    const retorno = somatotalcpf() % 10
    return retorno
}

console.log(`A matriz do CPF resulta em [${somacpf()}], ∴`)
console.log()
console.log(`Calculamos a soma total desta matriz, que resulta em ${somatotalcpf()}, ∴`)
console.log()
console.log(`Dividimos a matriz por 10 que resulta em ${divisaoCpf()}, e resta ${divisaoCpf2()}. Logo subtraímos ${divisaoCpf2()} por 10`)
console.log()
console.log("∴, o segundo verificador é calculado =>")
console.log()

cpf = [3, 2, 1, 7, 8, 6, 2, 4, 7, 3]
verificador = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function somacpfv1() {
    soma = cpf.map((soma, indice) => soma * verificador[indice])
    return soma
}

function somatotalcpfv1() {
    soma = somacpfv1().reduce((soma, numeros) => soma + numeros, 0)
    return soma
}

function divisaoCpfv1() {
    Math.floor(somatotalcpfv1() / 11)
}

console.log(somacpfv1())
console.log(somatotalcpfv1())
console.log(divisaoCpfv1())