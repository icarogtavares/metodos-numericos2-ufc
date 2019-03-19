const {
  chain,
  add,
  subtract,
  multiply,
} = require('mathjs');

function funcaoGrauUm (funcao, limiteInferior, limiteSuperior) {
  return chain(limiteSuperior)
    .subtract(limiteInferior)
    .divide(2.0)
    .multiply(
      add(
        funcao(limiteInferior),
        funcao(limiteSuperior)
      )
    )
    .done();
}

function funcaoGrauDois (funcao, limiteInferior, limiteSuperior) {
  const h = subtract(limiteSuperior, limiteInferior);
  return chain(h)
    .divide(3.0)
    .multiply(
      add(
        funcao(limiteInferior),
        multiply(4, funcao(add(limiteInferior, h))),
        funcao(limiteSuperior)
      )
    )
    .done();
}

module.exports = {
  funcaoGrauUm,
  funcaoGrauDois,
};
