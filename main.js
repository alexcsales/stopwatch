const relogio = document.querySelector('.relogio');

let segundos = 0;
let timer;

function pegaSegundos(milessimos) {
  const data = new Date(milessimos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}
