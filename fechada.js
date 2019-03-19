const { chain, add } = require('mathjs');

function funcaoGrauUm (funcao, limiteInferior, limiteSuperior) {
  return chain(limiteSuperior)
    .subtract(limiteInferior)
    .divide(2)
    .multiply(add(funcao(limiteInferior), funcao(limiteSuperior)))
    .done();
}

module.exports = {
  funcaoGrauUm,
};
