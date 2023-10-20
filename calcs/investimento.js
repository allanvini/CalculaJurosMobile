export function calculaAplicacaoSimples(capital, taxa, tempo){
    capital = Number(capital)
    taxa = Number(taxa)/100
    tempo = Number(tempo)

    let resultados = []

    for(let mes = 0; mes < tempo; mes++){
        const mesAnterior = mes == 0 ? null : resultados[mes-1]
        resultados.push({
            mes: mes + 1,
            capital: mesAnterior ? mesAnterior.montante : capital,
            taxa: (taxa*100),
            montante: mesAnterior ? ((mesAnterior.montante)*(1+taxa)) : capital*(1+taxa)
        })
    }
    return resultados
}

export function calculaAplicacaoRecorrente(capital, taxa, tempo){
    capital = Number(capital)
    taxa = Number(taxa)/100
    tempo = Number(tempo)
    let resultados = []
    for(let mes = 0; mes < tempo; mes++){
        const mesAnterior = mes == 0 ? null : resultados[mes-1]
        resultados.push({
            mes: mes + 1,
            capital: mesAnterior ? mesAnterior.montante + capital : capital,
            taxa: (taxa*100),
            montante: mesAnterior ? ((mesAnterior.montante+capital)*(1+taxa)) : capital*(1+taxa)
        })
    }
    return resultados
}