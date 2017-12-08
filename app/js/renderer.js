const { ipcRenderer } = require('electron');
// importando o timer.js
const timer = require('./timer');

let linkSobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play');
// selecionando o span
let tempo = document.querySelector('.tempo');

let curso = document.querySelector('.curso');

linkSobre.addEventListener('click' , function(){
    ipcRenderer.send('abrir-janela-sobre');
});

let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play = false;
botaoPlay.addEventListener('click', function() {
    if(play) {
        // passando o conteúdo de texto do span para a função parar
        timer.parar(curso.textContent);
        play = false;
    } else {
        timer.iniciar(tempo);
        play = true;
    }
    imgs = imgs.reverse();
    botaoPlay.src = imgs[0];
});