export interface StationDetail {
  Codigo: string;
  Type: string;
  TimeStamp: string;
  Show: boolean;
  "Name/General": string;
  "Name/Local": string;
  "Name/Prefix": string;
  "Position/Altitude": number | null;
  "Position/Bacia": string;
  "Position/Latitude": number;
  "Position/Longitude": number;
  "Position/Regiao": string;

  // Chuva
  "Data/Chuva/Chuva001h/Format": string;
  "Data/Chuva/Chuva001h/Label": string;
  "Data/Chuva/Chuva001h/Other": string;
  "Data/Chuva/Chuva001h/Show": boolean;
  "Data/Chuva/Chuva001h/Unit": string;
  "Data/Chuva/Chuva001h/Value": number;

  "Data/Chuva/Chuva003h/Format": string;
  "Data/Chuva/Chuva003h/Label": string;
  "Data/Chuva/Chuva003h/Other": string;
  "Data/Chuva/Chuva003h/Show": boolean;
  "Data/Chuva/Chuva003h/Unit": string;
  "Data/Chuva/Chuva003h/Value": number;

  "Data/Chuva/Chuva005min/Format": string;
  "Data/Chuva/Chuva005min/Label": string;
  "Data/Chuva/Chuva005min/Other": string;
  "Data/Chuva/Chuva005min/Show": boolean;
  "Data/Chuva/Chuva005min/Unit": string;
  "Data/Chuva/Chuva005min/Value": number;

  "Data/Chuva/Chuva006h/Format": string;
  "Data/Chuva/Chuva006h/Label": string;
  "Data/Chuva/Chuva006h/Other": string;
  "Data/Chuva/Chuva006h/Show": boolean;
  "Data/Chuva/Chuva006h/Unit": string;
  "Data/Chuva/Chuva006h/Value": number;

  "Data/Chuva/Chuva010min/Format": string;
  "Data/Chuva/Chuva010min/Label": string;
  "Data/Chuva/Chuva010min/Other": string;
  "Data/Chuva/Chuva010min/Show": boolean;
  "Data/Chuva/Chuva010min/Unit": string;
  "Data/Chuva/Chuva010min/Value": number;

  "Data/Chuva/Chuva012h/Format": string;
  "Data/Chuva/Chuva012h/Label": string;
  "Data/Chuva/Chuva012h/Other": string;
  "Data/Chuva/Chuva012h/Show": boolean;
  "Data/Chuva/Chuva012h/Unit": string;
  "Data/Chuva/Chuva012h/Value": number;

  "Data/Chuva/Chuva015min/Format": string;
  "Data/Chuva/Chuva015min/Label": string;
  "Data/Chuva/Chuva015min/Other": string;
  "Data/Chuva/Chuva015min/Show": boolean;
  "Data/Chuva/Chuva015min/Unit": string;
  "Data/Chuva/Chuva015min/Value": number;

  "Data/Chuva/Chuva015s/Format": string;
  "Data/Chuva/Chuva015s/Label": string;
  "Data/Chuva/Chuva015s/Other": string;
  "Data/Chuva/Chuva015s/Show": boolean;
  "Data/Chuva/Chuva015s/Unit": string;
  "Data/Chuva/Chuva015s/Value": number;

  "Data/Chuva/Chuva024h/Format": string;
  "Data/Chuva/Chuva024h/Label": string;
  "Data/Chuva/Chuva024h/Other": string;
  "Data/Chuva/Chuva024h/Show": boolean;
  "Data/Chuva/Chuva024h/Unit": string;
  "Data/Chuva/Chuva024h/Value": number;

  "Data/Chuva/Chuva030min/Format": string;
  "Data/Chuva/Chuva030min/Label": string;
  "Data/Chuva/Chuva030min/Other": string;
  "Data/Chuva/Chuva030min/Show": boolean;
  "Data/Chuva/Chuva030min/Unit": string;
  "Data/Chuva/Chuva030min/Value": number;

  "Data/Chuva/Chuva048h/Format": string;
  "Data/Chuva/Chuva048h/Label": string;
  "Data/Chuva/Chuva048h/Other": string;
  "Data/Chuva/Chuva048h/Show": boolean;
  "Data/Chuva/Chuva048h/Unit": string;
  "Data/Chuva/Chuva048h/Value": number;

  "Data/Chuva/Chuva072h/Format": string;
  "Data/Chuva/Chuva072h/Label": string;
  "Data/Chuva/Chuva072h/Other": string;
  "Data/Chuva/Chuva072h/Show": boolean;
  "Data/Chuva/Chuva072h/Unit": string;
  "Data/Chuva/Chuva072h/Value": number;

  "Data/Chuva/Chuva096h/Format": string;
  "Data/Chuva/Chuva096h/Label": string;
  "Data/Chuva/Chuva096h/Other": string;
  "Data/Chuva/Chuva096h/Show": boolean;
  "Data/Chuva/Chuva096h/Unit": string;
  "Data/Chuva/Chuva096h/Value": number;

  "Data/Chuva/Chuva120h/Format": string;
  "Data/Chuva/Chuva120h/Label": string;
  "Data/Chuva/Chuva120h/Other": string;
  "Data/Chuva/Chuva120h/Show": boolean;
  "Data/Chuva/Chuva120h/Unit": string;
  "Data/Chuva/Chuva120h/Value": number;

  "Data/Chuva/Chuva144h/Format": string;
  "Data/Chuva/Chuva144h/Label": string;
  "Data/Chuva/Chuva144h/Other": string;
  "Data/Chuva/Chuva144h/Show": boolean;
  "Data/Chuva/Chuva144h/Unit": string;
  "Data/Chuva/Chuva144h/Value": number;

  "Data/Chuva/Chuva168h/Format": string;
  "Data/Chuva/Chuva168h/Label": string;
  "Data/Chuva/Chuva168h/Other": string;
  "Data/Chuva/Chuva168h/Show": boolean;
  "Data/Chuva/Chuva168h/Unit": string;
  "Data/Chuva/Chuva168h/Value": number;

  // Dados do Rio
  "Data/Rio/RioAreaDrenagem/Format": string;
  "Data/Rio/RioAreaDrenagem/Label": string;
  "Data/Rio/RioAreaDrenagem/Other": string;
  "Data/Rio/RioAreaDrenagem/Show": boolean;
  "Data/Rio/RioAreaDrenagem/Unit": string;
  "Data/Rio/RioAreaDrenagem/Value": number;

  "Data/Rio/RioNivel/Format": string;
  "Data/Rio/RioNivel/Label": string;
  "Data/Rio/RioNivel/Other": string;
  "Data/Rio/RioNivel/Show": boolean;
  "Data/Rio/RioNivel/Unit": string;
  "Data/Rio/RioNivel/Value": number;

  "Data/Rio/RioNivelTendencia/Format": string;
  "Data/Rio/RioNivelTendencia/Label": string;
  "Data/Rio/RioNivelTendencia/Other": string;
  "Data/Rio/RioNivelTendencia/Show": boolean;
  "Data/Rio/RioNivelTendencia/Unit": string;
  "Data/Rio/RioNivelTendencia/Value": number;

  "Data/Rio/RioNome/Format": string;
  "Data/Rio/RioNome/Label": string;
  "Data/Rio/RioNome/Other": string;
  "Data/Rio/RioNome/Show": boolean;
  "Data/Rio/RioNome/Unit": string | null;
  "Data/Rio/RioNome/Value": string;
}
