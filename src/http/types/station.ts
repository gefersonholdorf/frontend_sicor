export interface EstacaoDetalhada {
  Codigo: string;

  // Campos de Chuva
  "Data/Chuva/Chuva001h": ChuvaItem;
  "Data/Chuva/Chuva003h": ChuvaItem;
  "Data/Chuva/Chuva005min": ChuvaItem;
  "Data/Chuva/Chuva006h": ChuvaItem;
  "Data/Chuva/Chuva010min": ChuvaItem;
  "Data/Chuva/Chuva012h": ChuvaItem;
  "Data/Chuva/Chuva015min": ChuvaItem;
  "Data/Chuva/Chuva015s": ChuvaItem;
  "Data/Chuva/Chuva024h": ChuvaItem;
  "Data/Chuva/Chuva030min": ChuvaItem;
  "Data/Chuva/Chuva048h": ChuvaItem;
  "Data/Chuva/Chuva072h": ChuvaItem;
  "Data/Chuva/Chuva096h": ChuvaItem;
  "Data/Chuva/Chuva120h": ChuvaItem;
  "Data/Chuva/Chuva144h": ChuvaItem;
  "Data/Chuva/Chuva168h": ChuvaItem;

  // Campos do Rio
  "Data/Rio/RioAreaDrenagem": RioItem<number>;
  "Data/Rio/RioNivel": RioItem<number>;
  "Data/Rio/RioNivelTendencia": RioItem<number>;
  "Data/Rio/RioNome": RioItem<string | null>;

  // Informações de Nome e Localização
  "Name/General": string;
  "Name/Local": string;
  "Name/Prefix": string;

  // Posição geográfica
  "Position/Altitude": number | null;
  "Position/Bacia": string;
  "Position/Latitude": number;
  "Position/Longitude": number;
  "Position/Regiao": string;

  // Outros
  Show: boolean;
  TimeStamp: string;
  Type: string;
}

export interface ChuvaItem {
  Format: string;
  Label: string;
  Other: string; // pode ser tipado como Record<string, any> se quiser parsear
  Show: boolean;
  Unit: string;
  Value: number;
}

export interface RioItem<T> {
  Format: string;
  Label: string;
  Other: string;
  Show: boolean;
  Unit: string | null;
  Value: T;
}

export interface TagsResponse {
  [codigoEstacao: string]: EstacaoDetalhada;
}

export interface GraphQLTagsData {
  tags: TagsResponse;
}
