//operadores lógicos

// E, AND
console.log (true && true) // true
console.log (true && false) // false
console.log (false && false) // false

//exemplos

let idade = 18
let temCarteira = true

if (idade = 21 && temCarteira)
    console.log ("Pode dirigir!")
else console.log ("Não pode dirigir")

//a idade dada recebe 18 (é uma verdade pois já é recebida como um valor), ou seja já é uma verdade

//temCarteira recebe uma verdade, neste caso o exemplo finaliza com "Pode dirigir!"", pois junta os dois dados
//verdadeiros com "&&"

//quando a idade for menor "<" que o valor recebido de 18, a finalização recebe false que recebe "Não pode dirigir"

//OU, OR
console.log (true || true) // true
console.log (true || false) // true
console.log (false || false) // false

let calor = false
let seco = true

if (calor || seco)
    console.log ("Beba água")

//este comando || indica que alguma das variáveis precisa ser verdadeira para executar a leitura, apenas uma

//NÃO, NOT

!true // false
!false // true

let viniJrÉ10 = false

if (!viniJrÉ10)
    console.log("Neymar é o 10")
else console.log("Sim, ele é o 10")

//no exemplo indica o seguinte, o vini jr não é o camisa 10 da seleção (const), alguém veio e confirmou
// que concorda dele ser o 10 (!), logo então traz !false, que é "console.log("Sim, ele é o 10")"

//este comando indica que se um valor é dado, mas é escrito com "!" antecipadamente
//significa que este valor não recebe verdade