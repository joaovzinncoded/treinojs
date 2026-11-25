    const notasGerais = [
        nota1 = [10, 6.5, 8, 7.5],
        nota2 = [9, 6, 6],
        nota3 = [8.5, 9.5]
    ]
        let matriz = notasGerais 
    //    console.log(matriz)

        for (let i = 0; 
            i < matriz.length; 
            i++
    ) {
            console.log(matriz[i]
    )
            console.log(''

    )
    }

    const somaLinha1 = matriz[0]
    let soma1 = 0

        for (let  j = 0; 
            j < matriz[0].length; 
            j++
    )  {
                soma1 = soma1 + somaLinha1[j]
    }
    console.log('Media nota1 = ' + soma1
    )

    const somaLinha2 = matriz[1]
    let soma2 = 0

        for (let n = 0;
            n < matriz[1].length;
            n++
    ) {
                soma2 = soma2 + somaLinha2[n]
    }
            console.log('Média nota2 = ' + soma2
    )

    const somaLinha3 = matriz[2]
    let soma3 = 0

        for (let g = 0;
            g < matriz[2].length;
            g++
    ) {
                soma3 = soma3 + somaLinha3[g]
    }
            console.log('Média nota3 = ' + soma3
    )

    let totalNotas = matriz[0].length + matriz[1].length + matriz[2].length

    console.log('A média das notas gerais é ' + ((soma1 + soma2 + soma3) / totalNotas).toFixed(2)
)