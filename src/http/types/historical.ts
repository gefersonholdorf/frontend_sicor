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