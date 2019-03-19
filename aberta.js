const {
  chain,
  add,
  divide,
} = require('mathjs');

function funcaoGrauZero (funcao, limiteInferior, limiteSuperior) {
  return chain(limiteSuperior)
    .subtract(limiteInferior)
    .multiply(funcao(divide(
      add(limiteInferior, limiteSuperior),
      2
    )))
    .divide(2)
    .done();
}

module.exports = {
  funcaoGrauZero,
};
