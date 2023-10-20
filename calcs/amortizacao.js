export function calculaAmortizacaoPRICE(saldoDevedor, totalParcelas, taxa) {

    const parcela = (Number(saldoDevedor) * (Number(taxa) / 100) * Math.pow((1 + (Number(taxa) / 100)), Number(totalParcelas))) / ((Math.pow((1 + (Number(taxa) / 100)), Number(totalParcelas))) - 1)

    const prestacoes = []

    for (let mes = 0; mes < Number(totalParcelas); mes++) {
        if (mes == 0) {
            const juro = (Number(saldoDevedor) * (1 + (Number(taxa) / 100))) - Number(saldoDevedor);
            const amortizacao = parcela - juro
            const novoSaldoDevedor = saldoDevedor - amortizacao
            prestacoes.push({
                mes: mes + 1,
                prestacao: parcela,
                amortizacao: amortizacao,
                juro: juro,
                saldoDevedor: novoSaldoDevedor
            })
        } else {
            const juro = (prestacoes[mes - 1].saldoDevedor * (1 + (Number(taxa) / 100))) - prestacoes[mes - 1].saldoDevedor
            const amortizacao = parcela - juro
            const novoSaldoDevedor = prestacoes[mes - 1].saldoDevedor - amortizacao
            prestacoes.push({
                mes: mes + 1,
                prestacao: parcela,
                amortizacao: amortizacao,
                juro: juro,
                saldoDevedor: novoSaldoDevedor
            })
        }
    }

    return prestacoes;

}

export function calculaAmortizacaoSAC(saldoDevedor, totalParcelas, taxa) {
    const amortizacao = Number(saldoDevedor) / Number(totalParcelas)

    let parcelas = []

    for (let mes = 0; mes < Number(totalParcelas); mes++) {
        if (mes == 0) {
            const juro = Number(saldoDevedor) * (Number(taxa)/100)
            const prestacao = juro + amortizacao
            const novoSaldoDevedor = Number(saldoDevedor) - amortizacao

            parcelas.push({
                mes: mes+1,
                prestacao,
                juro,
                amortizacao,
                saldoDevedor: novoSaldoDevedor
            })

        } else {
            const juro = parcelas[mes-1] .saldoDevedor * (Number(taxa)/100)
            const prestacao = juro + amortizacao
            const novoSaldoDevedor = parcelas[mes-1] .saldoDevedor - amortizacao

            parcelas.push({
                mes: mes+1,
                prestacao,
                juro,
                amortizacao,
                saldoDevedor: novoSaldoDevedor
            })
        }
    }

    return parcelas
}