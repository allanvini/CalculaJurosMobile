export function DescobreParametro(capital, tempo, taxa, montante) {
    if (!capital) {
        return {
            capital: (Number(montante) / ((1 + Number(taxa) / 100) ** Number(tempo))).toFixed(2),
            tempo,
            taxa,
            montante
        }
    }
    else if (!tempo) {
        return {
            capital,
            tempo: Math.log10(Number(montante) / Number(capital)) / Math.log10(1 + Number(taxa) / 100),
            taxa,
            montante
        }
    }
    else if (!taxa) {
        let taxa = 0.0001;
        let resultadoTaxa = 0;

        while (Number(montante) >= resultadoTaxa) {
            resultadoTaxa = Number(capital) * ((1 + (taxa / 100)) ** Number(tempo))
            taxa += 0.0001;
        }

        taxa -= 0.0001

        return {
            capital,
            tempo,
            taxa: taxa.toFixed(4),
            montante
        }

    }
    else if (!montante) {
        return {
            capital,
            tempo,
            taxa,
            montante: (Number(capital) * ((1 + Number(taxa) / 100) ** Number(tempo))).toFixed(2)
        }
    }
    else {
        return {
            capital,
            tempo,
            taxa,
            montante
        }
    }
}