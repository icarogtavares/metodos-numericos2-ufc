/* eslint-disable no-param-reassign, no-shadow */
const math = require('mathjs');
const Promise = require('bluebird');
const readlineSync = require('readline-sync');
const fechada = require('./fechada');
const aberta = require('./aberta');
const funcoes = require('./funcoes');
const { getStringWithColor, colors } = require('./console-color');

const input = {};

const FA = {
  FILOSOFIA_FECHADA: 0,
  FILOSOFIA_ABERTA: 1,
};

function askForInputs (input) {
  function questionStringWithColor (question) {
    return `${getStringWithColor(question.trim(), colors.FgWhite, colors.BgBlack)} `;
  }

  function askAndReturnFilosofia () {
    const filosofias = ['Fechada', 'Aberta'];
    return readlineSync.keyInSelect(filosofias, questionStringWithColor('Qual filosofia?'));
  }

  function askAndReturnGrau (filosofia) {
    const primeiroGrau = filosofia === FA.FILOSOFIA_FECHADA ? 1 : 0;

    console.log(questionStringWithColor('Qual grau do polinômio de substituição você deseja?'));
    const grau = readlineSync.keyIn(questionStringWithColor(`Pressione uma tecla de ${primeiroGrau} a 4: `), { limit: `$<${primeiroGrau}-4>` });

    return Number(grau);
  }

  function askAndReturnFuncao () {
    const funcaoNameKey = readlineSync.keyInSelect(funcoes.funcoesName, questionStringWithColor('Qual função você deseja para integrar?'));
    const funcaoName = funcoes.funcoesName[funcaoNameKey];
    return funcoes.getFuncaoByName(funcaoName);
  }

  input.limiteInferior = readlineSync.questionFloat(questionStringWithColor('Qual é o limite inferior?'));
  input.limiteSuperior = readlineSync.questionFloat(questionStringWithColor('Qual é o limite superior?'));
  input.fa = askAndReturnFilosofia();
  input.grau = askAndReturnGrau(input.fa);
  input.tolerancia = readlineSync.questionFloat(questionStringWithColor('Qual é a tolerância?'));
  input.funcao = askAndReturnFuncao();

  return input;
}

function checkPhilosophyAndReturnIntegrateFunction (input) {
  function integracoesFilosofiaFechada (input) {
    switch (input.grau) {
      case 1:
        return fechada.funcaoGrauUm;
      case 2:
        return fechada.funcaoGrauDois;
      case 3:
        return 0;
      case 4:
        return 0;
      default:
        throw new Error('Grau para filosofia FECHADA inválida!');
    }
  }
  function integracoesFilosofiaAberta (input) {
    switch (input.grau) {
      case 0:
        return aberta.funcaoGrauZero;
      case 1:
        return aberta.funcaoGrauUm;
      case 2:
        return aberta.funcaoGrauDois;
      case 3:
        return aberta.funcaoGrauTres;
      case 4:
        return aberta.funcaoGrauQuatro;
      default:
        throw new Error('Grau para filosofia ABERTA inválida!');
    }
  }

  switch (input.fa) {
    case FA.FILOSOFIA_FECHADA:
      input.integrateFunction = integracoesFilosofiaFechada(input);
      break;
    case FA.FILOSOFIA_ABERTA:
      input.integrateFunction = integracoesFilosofiaAberta(input);
      break;
    default:
      throw new Error('Filosofia inválida!');
  }

  return input;
}

/** Função para integração
    @name functionToIntegrate
    @function
    @param {Number} value Valor a ser calculado
*/

/** Função para integração
    @name integrateFunction
    @function
    @param {functionToIntegrate} funcao
    @param {Number} limiteInferior
    @param {Number} limiteSuperior
*/

/**
 * Calcula a integral
 * @param {Object} input Input do usuário
 * @param {Number} input.limiteInferior Limite inferior da integral
 * @param {Number} input.limiteSuperior Limite superior da integral
 * @param {Number} input.fa Filosofia
 * @param {Number} input.grau Grau da filosofia
 * @param {Number} input.tolerancia Tolerância do erro
 * @param {functionToIntegrate} input.funcao Função a ser integrada
 * @param {integrateFunction} input.integrateFunction Função de integração
 */
function integrate (input) {
  let particao = 1;
  let integralAntiga = 0.0;

  while (true) {
    const deltaX = (input.limiteSuperior - input.limiteInferior) / particao;
    let integralAtual = 0.0;
    for (let i = 0; i < particao; i += 1) {
      const xInicial = input.limiteInferior + (i * deltaX);
      const xFinal = xInicial + deltaX;
      integralAtual += input.integrateFunction(input.funcao, xInicial, xFinal);
    }
    const erro = math.abs(integralAtual - integralAntiga);
    if (erro <= input.tolerancia) {
      const resultado = {
        resultado: integralAtual,
        erro,
      };
      return resultado;
    }

    integralAntiga = integralAtual;
    particao *= 2;
  }
}

/**
 * Imprime o resultado
 * @param {Object} resultado
 * @param {Number} resultado.resultado Resultado da integral
 * @param {Number} resultado.erro Último erro obtido
 */
function finish (resultado) {
  console.log('\n');
  console.log(getStringWithColor(`Resultado: ${resultado.resultado}`, colors.FgGreen, colors.BgBlack));
  console.log(getStringWithColor(`Erro: ${resultado.erro}`, colors.FgCyan, colors.BgBlack));
}

function handleError (err) {
  console.log(getStringWithColor(err.message, colors.FgRed, colors.BgBlack));
}

Promise.resolve(input)
  .then(askForInputs)
  .then(checkPhilosophyAndReturnIntegrateFunction)
  .then(integrate)
  .then(finish)
  .catch(handleError);
