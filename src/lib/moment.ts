export function calculeMoment(dataString: string) {
  const data = new Date(dataString);

  const pad = (n: number) => n.toString().padStart(2, '0');

  const dia = pad(data.getDate());
  const mes = pad(data.getMonth() + 1);
  const ano = data.getFullYear();

  const horas = pad(data.getHours());
  const minutos = pad(data.getMinutes());
  const segundos = pad(data.getSeconds());

  return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

export function calculeMomentAreaChart(dataString: string) {
  const data = new Date(dataString);

  const pad = (n: number) => n.toString().padStart(2, '0');

  const dia = pad(data.getDate());
  const mes = pad(data.getMonth() + 1);
  const ano = data.getFullYear().toString().slice(2, 6);

  const horas = pad(data.getHours());

  return `${dia}/${mes}/${ano} ${horas}h`;
}