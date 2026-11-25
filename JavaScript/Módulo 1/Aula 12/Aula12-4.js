let nome = "José"

function darUmAlo(nome) {
        nome = (0)
        console.log(`Olá ${nome || "rapazeada"}`)
    }

    //dado nome dentro da função pode se considerar o dado somente dentro da função

    function despedir(nome) {
        console.log(`Tchau tchau ${nome || "galera"}`)
    }

    darUmAlo(nome)
    despedir(nome)


//a variável nome pode agregar como valor dentro da função

// a função define parâmetros dentro do código, e os dados inseridos definem os argumentos

function darUmAlo(nome = "João") {
        console.log(`Olá ${"nome"}`)
    }

    //dado nome dentro da função pode se considerar o dado somente dentro da função

    function despedir(nome) {
        console.log(`Tchau tchau ${nome || "galera"}`)
    }

    darUmAlo(nome)
    despedir(nome)