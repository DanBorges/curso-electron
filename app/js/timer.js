const moment = require('moment');
let segundos;
let timer;

module.exports = {
    parar(curso) {
        clearInterval(timer);
        let tempoEstudado = this.segundosParaTempo(segundos);
        ipcRenderer.send('curso-parado', curso, tempoEstudado);
    },
    iniciar(el) {
        let tempo = moment.duration(el.textContent);
        segundos = tempo.asSeconds();
        // removendo o setInterval anterior
        clearInterval(timer);
        timer = setInterval(() => {
            segundos++;
            el.textContent = this.segundosParaTempo(segundos);
        }, 1000);
    }, parar() {
        clearInterval(timer);
    }, segundosParaTempo(segundos) {
        return moment().startOf('day').seconds(segundos).format("HH:mm:ss");
    }
}