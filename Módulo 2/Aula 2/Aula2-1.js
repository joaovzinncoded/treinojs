let times = ['corinthians', 'flamengo', 'sao paulo', 'gremio'
]

times.pop()
//o método .pop tira o último dado do array
console.log(times  
) //[ 'corinthians', 'flamengo', 'sao paulo' ]

  //o método unshift acrescenta o dado marcado na primeira coluna do array
  times.unshift('cruzeiro')
console.log(times  
) //[ 'cruzeiro', 'corinthians', 'flamengo', 'sao paulo' ]

  //o método push acrescenta o dado marcado na última coluna do array
  times.push('cruzeiro')
console.log(times
) // [ 'cruzeiro', 'corinthians', 'flamengo', 'sao paulo', 'cruzeiro' ]

  //o método shift tira o primeiro dado do array
  times.shift()
console.log(times
) //[ 'corinthians', 'flamengo', 'sao paulo', 'cruzeiro' ]

let concatenacao = times.concat(times)
console.log(concatenacao)