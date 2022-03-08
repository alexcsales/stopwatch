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

function iniciaCronometro() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = pegaSegundos(segundos);
  }, 1000);
}

document.addEventListener('click', function (evento) {
  const element = evento.target

  if (element.classList.contains('iniciar')) {
    relogio.classList.remove('zerado');
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaCronometro()
  }
  if (element.classList.contains('zerar')) {
    relogio.classList.add('zerado');
    clearInterval(timer)
    relogio.innerHTML = '00:00:00';
    segundos = 0;
  }
