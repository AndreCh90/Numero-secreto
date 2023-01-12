function verificaSeOChutePossueValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor inválido</div>'
        return
    }

    if (numeroMaiorOuMenorQueOPermitido(numero))
        elementoChute.innerHTML += `<idv>valor inválido! Diga um número entre ${menorValor} e ${maiorValor}</div>`
        return

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns, você acertou o número secreto!</h2>
            <h3> ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar-novamente"></button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-dow-long">
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long">
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()//*Recarrega a página atual e reinicia o jogo.
    }
})