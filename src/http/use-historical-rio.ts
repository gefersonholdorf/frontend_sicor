import { useQuery } from "@tanstack/react-query"

export interface Historical {
  timestamp: string
  codigo: string
  chuva_hora: number | null
  chuva_acum: number | null
  rio_nivel: number | null
  barramento_nivel: number | null
  barramento_porc: number | null
  vento_avg: number | null
  vento_max: number | null
  ponto_orvalho: number | null
  pressao_atmos: number | null
  sens_termica: number | null
  temperatura: number | null
  umidade: number | null
}

export interface HistoricalResponse {
  data: {
    historico: Historical[]
  }
}

export const useHistorical = (cod: string) => {
  return useQuery({
    queryKey: ['historical', cod],
    queryFn: async () => {
      const response = await fetch('https://monitoramento.defesacivil.sc.gov.br/graphql', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          operationName: "Historico",
          variables: {
            codigo: cod,
            periodo: "Periodo1d"
          },
          query: `
            query Historico($codigo: String!, $periodo: HistoricoPeriodo, $dataInicial: DateTime, $dataFinal: DateTime) {
              historico: estacao_getHistoricalData(
                codigo: $codigo
                intervalo: Int1h
                periodo: $periodo
                dataIni: $dataInicial
                dataFim: $dataFinal
              ) {
                timestamp
                codigo
                chuva_hora
                chuva_acum
                rio_nivel
                barramento_nivel
                barramento_porc
                vento_avg
                vento_max
                ponto_orvalho
                pressao_atmos
                sens_termica
                temperatura
                umidade
              }
            }
          `
        })
      })

      const result: HistoricalResponse = await response.json()

      console.log(result)

      return result.data
    }
  })
}
