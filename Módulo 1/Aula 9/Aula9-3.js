const nome = "Joao"

if (nome)
{
    console.log("Opa " + nome + "! Tudo bem?")
} else {
    console.log("Ola! Qual seu nome?")
}

console.log(typeof nome)

//truthy & falsy
//dentro de um if os valores podem retornar true ou false quando classificados com os operadores &&, || e !
//estes valores se tornam falsy quando são false, 0, null, " ", NaN, undefined. O restante dos valores são todos truthy, "0", "false",
//" ", [], {}, são TRUTHY, pois são strings, arrays, objetos vazios ou não

console.log(!!0)
console.log(!!null)
console.log(!!undefined)
//etc..

!!0          // false  → 0 é falsy
!!"0"        // true   → string não-vazia é truthy
!!123        // true   → número (≠0) é truthy
!!NaN        // false  → NaN é falsy
!!null       // false  → null é falsy
!!undefined  // false  → undefined é falsy
!!{}         // true   → objeto (mesmo vazio) é truthy
!![]         // true   → objeto (mesmo vazio) é truthy
