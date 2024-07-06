let vitorias = Math.floor(Math.random() * 200)
let derrotas = Math.floor(Math.random() * 100)
let saldoVitorias = (vitorias - derrotas)

function checkRank(vitorias, derrotas, saldoVitorias) {
     let nivel = ""
        {
            while (saldoVitorias < 0) {
                saldoVitorias++
            }
    
        if(saldoVitorias <= 10){nivel = "Ferro"}
        else if(saldoVitorias >= 11 && saldoVitorias <= 20) {nivel = "Bronze"}
        else if(saldoVitorias >= 21 && saldoVitorias <= 50) {nivel = "Prata"}
        else if(saldoVitorias >= 51 && saldoVitorias <= 80) {nivel = "Ouro"}
        else if(saldoVitorias >= 81 && saldoVitorias <= 90) {nivel = "Diamante"}
        else if(saldoVitorias >= 91 && saldoVitorias <= 100) {nivel = "Lendário"}
        else if(saldoVitorias >= 101) {nivel = "Imortal"}
            console.log("O Herói tem saldo de " + saldoVitorias + " está no rank de " + nivel)
    }
}
checkRank(vitorias, derrotas, saldoVitorias)