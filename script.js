'use strict';

const buttonDenovo = document.querySelector('.btn-again');
const buttonVerificar = document.querySelector('.btn-check');
const numeroSecreto = document.querySelector('.number');
const score = document.querySelector('.score');
const maiorScore = document.querySelector('.maiorScore');
let numeroAcertar = numeroAleatorio();
const textoInformativo = document.querySelector('#texto-informativo');
let scoreTotal = 20;

score.textContent = `Score: ${scoreTotal}`
let numeroMaiorScore = 0;
maiorScore.textContent = `Maior Score: ${numeroMaiorScore}`

buttonVerificar.addEventListener('click', () => {
    let numeroChutado = document.querySelector('.guess').value;
    if(numeroChutado == ''){
        alert('Digite um número.')
    } else if(numeroChutado == numeroAcertar){
        document.querySelector('body').style.backgroundColor = 'green';
        numeroSecreto.textContent = numeroAcertar;
        textoInformativo.textContent = '🎉 Parabéns, você acertou!'
        maiorScore.textContent = `Maior Score: ${scoreTotal}`
        numeroMaiorScore = scoreTotal;
    } else {
        score.textContent = `Score: ${--scoreTotal}`
        if(numeroChutado > numeroAcertar){
            textoInformativo.textContent = 'O número é menor';
            document.querySelector('.guess').value = ''
        } else if (numeroChutado < numeroAcertar) {
            textoInformativo.textContent = 'O número é maior';
            document.querySelector('.guess').value = ''
        }
    }

    if(scoreTotal == 0){
        textoInformativo.textContent = ('Você Perdeu!');
        document.querySelector('.guess').setAttribute('disabled', 'disabled');
    }
})


let maiorScoreSalvo = document.querySelector('.maiorScore').value;

buttonDenovo.addEventListener('click', () => {
    numeroAcertar = numeroAleatorio()
    textoInformativo.textContent = 'Me informe um número...';
    score.textContent = `Score: ${scoreTotal = 20}`;
    numeroSecreto.textContent = '?';
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = 'rgb(31, 31, 31)';
    document.querySelector('.guess').removeAttribute('disabled', 'disabled')
})

function numeroAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * 20);
    return numeroAleatorio;
}
