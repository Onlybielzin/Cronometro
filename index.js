var segundos = 0
var minutos = 0
var horas = 0
var cronometro

function iniciar() {
    timer()
}
function timer() {
    cronometro = setInterval(() => {
        segundos = segundos + 1
        var format = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);
        document.querySelector('h1').innerText = format
        if (segundos == 5) {
            segundos = 0
            minutos = minutos + 1
        }
        if (minutos == 2) {
            minutos = 0
            horas = horas + 1
        }
    }, 1000)
}
function parar() {
    clearInterval(cronometro)
}
function reniciar() {
    clearInterval(cronometro)
    segundos = 0
    minutos = 0
    horas = 0
    var format = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);
    document.querySelector('h1').innerText = format
}