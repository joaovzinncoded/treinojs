    //promoção autoescola

    function matricularCliente (nome, dataDeNascimento) {
        if (nome && dataDeNascimento)  {
            const partes = dataDeNascimento.split("/")
            const dia = Number(partes[0])
            const mes = Number(partes[1])
            const ano = Number(partes[2])
            const dataNasc = new Date(ano, mes - 1, dia)

            const hoje = new Date()
            let idade = hoje.getFullYear() - dataNasc.getFullYear()
            if (hoje.getMonth() < dataNasc.getMonth() 
            || (hoje.getMonth() === dataNasc.getMonth() && hoje.getDate() < dataNasc.getDate())) {
            idade--  
            }

            const dataLiberacao = new Date(ano + 18, mes - 1, dia + 1)
            const precoBase = 1800
            let valor

            if (idade < 16) {
            return `Notei aqui em suas informações que você ainda não possui 16 anos.
    A nossa condição oferta descontos pras pessoas que possuem 16 anos ou mais.`
            }
    
            else if (idade >= 16 && idade < 18) {
            valor = precoBase * 0.8
            return `Olá ${nome} pelos dados informados vi que nasceu em ${dataNasc.toLocaleDateString("pt-BR")} e possui ${idade} anos,
    venho lhe informar que você recebeu uma oferta de 20% de desconto na sua PRÉ-MATRICULA na nossa autoescola, efetuando já o pagamento
    você aproveita deste desconto em cima da sua matricula, e pode efetuar o inicio de suas aulas já no dia ${dataLiberacao.toLocaleDateString("pt-BR")}!
    Fica no total de ${valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} com o seu desconto!`
            }
            
            else if (idade >= 18 && idade <= 40) {
            valor = precoBase
            return `Olá ${nome} pelos dados informados vi que nasceu em ${dataNasc.toLocaleDateString("pt-BR")} e possui ${idade} anos,
    vou lhe encaminhar ao nosso setor de MATRICULAS, para que nos envie a documentação de inicio de aulas em nossa autoescola, o pacote completo
    de sua carteira fica no total de ${valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} conosco, e você pode iniciar as suas
    aulas assim que concluir sua matricula!`
            } 

            else {
            valor = precoBase * 0.6
            return `Olá ${nome} pelos dados informados vi que nasceu em ${dataNasc.toLocaleDateString("pt-BR")} e possui ${idade} anos,
    venho lhe informar que você recebe uma oferta de 40% de desconto na sua MATRICULA na nossa autoescola, pra que possa
    aproveitar do desconto e iniciar sua jornada conosco! Fica no total de ${valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}, e você pode
    iniciar as suas aulas assim que concluir sua matricula!!`
            }

        } else if (!nome) {
            return `Olá! Me informe o seu nome por gentileza`
        } else if (!dataDeNascimento) {
            return `Olá! Me informe a sua data de nascimento por gentileza`
        }
        }

    console.log(matricularCliente("João", "16/10/2009"))