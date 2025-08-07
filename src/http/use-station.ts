import { useQuery } from "@tanstack/react-query"
import type { StationDetail } from "./types/station"

export interface StationResponse {
    data: {
        tags: {
            [cod: string]: StationDetail
        }
    }
}

export const useStation = (cod: string) => {
    return useQuery({
        queryKey: ['station', cod],
        queryFn: async () => {
            const response = await fetch('https://monitoramento.defesacivil.sc.gov.br/graphql', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: `query Teste { tags: estacao_getEstacao(codigos: [\"${cod}\"]) }`  //Pega a estação de Benedito Novo e Timbó
                })
            })

            const result: StationResponse = await response.json()

            return result
        },
    })
}