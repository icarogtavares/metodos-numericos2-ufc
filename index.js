/* eslint-disable no-param-reassign, no-shadow */
const math = require('mathjs');
const Promise = require('bluebird');
const readlineSync = require('readline-sync');

const input = {};

const FA = {
  FILOSOFIA_FECHADA: 0,
  FILOSOFIA_ABERTA: 1,
};

function askForInputs (input) {
  function askAndReturnFilosofia () {
    const filosofias = ['Fechada', 'Aberta'];
    return readlineSync.keyInSelect(filosofias, 'Qual filosofia? ');
  }

  function askAndReturnGrau (filosofia) {
    const graus = filosofia === FA.FILOSOFIA_FECHADA ? [1, 2, 3, 4] : [0, 1, 2, 3, 4];
    return readlineSync.keyInSelect(graus, 'Qual grau? ');
  }

  input.limiteInferior = readlineSync.questionFloat('Qual é o limite inferior? ');
  input.limiteSuperior = readlineSync.questionFloat('Qual é o limite superior? ');
  input.fa = askAndReturnFilosofia();
  input.grau = askAndReturnGrau(input.fa);
  input.tolerancia = readlineSync.questionFloat('Qual é a tolerância? ');

  return input;
}

Promise.resolve(input)
  .then(askForInputs)
  .then();