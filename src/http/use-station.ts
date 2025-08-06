import { useQuery } from "@tanstack/react-query"
import type { EstacaoDetalhada } from "./types/station"

export interface StationResponse {
    data: {
        tags: {
            'DCSC-00004': EstacaoDetalhada
        }
    }
}

export const useStation = () => {
    return useQuery({
        queryKey: ['station'],
        queryFn: async () => {
            const response = await fetch('https://monitoramento.defesacivil.sc.gov.br/graphql', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: "query Teste { tags: estacao_getEstacao(codigos: [\"DCSC-00004\"]) }"  //Pega a estação de Benedito Novo e Timbó
                })
            })

            const result: StationResponse = await response.json()

            console.log(result.data.tags["DCSC-00004"].Codigo)

            return result
        }
    })
}