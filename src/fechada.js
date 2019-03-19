const {
  chain,
  add,
  multiply,
} = require('mathjs');

function funcaoGrauUm (funcao, limiteInferior, limiteSuperior) {
  return (limiteSuperior - limiteInferior) / 2.0 * (funcao(limiteInferior) + funcao(limiteSuperior));
}

function funcaoGrauDois (funcao, limiteInferior, limiteSuperior) {
  const h = chain(limiteSuperior)
    .subtract(limiteInferior)
    .divide(2.0)
    .done();
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
