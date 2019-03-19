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

function funcaoGrauUm (funcao, limiteInferior, limiteSuperior) {
  const h = chain(limiteSuperior)
    .subtract(limiteInferior)
    .divide(3)
    .done();
  return chain(limiteSuperior)
    .subtract(limiteInferior)
    .divide(2.0)
    .multiply(add(
      funcao(add(limiteInferior, h)),
      funcao(chain(limiteInferior)
        .add(2)
        .multiply(h)
        .done())
    ))
    .done();
}

module.exports = {
  funcaoGrauZero,
  funcaoGrauUm,
};
