const {
  chain,
  add,
  divide,
  multiply,
} = require('mathjs');

function funcaoGrauZero (funcao, limiteInferior, limiteSuperior) {
  return chain(limiteSuperior)
    .subtract(limiteInferior)
    .multiply(funcao(divide(
      add(limiteInferior, limiteSuperior),
      2.0
    )))
    .done();
}

function funcaoGrauUm (funcao, limiteInferior, limiteSuperior) {
  const h = (limiteSuperior - limiteInferior) / 3.0;
  return (limiteSuperior - limiteInferior) / 2 * (funcao(limiteInferior + h) + funcao(limiteInferior + 2 * h));
}

function funcaoGrauDois (funcao, limiteInferior, limiteSuperior) {
  const h = (limiteSuperior - limiteInferior) / 4.0;
  return 4 * h / 3 * (
    2 * funcao(limiteInferior + h)
    - funcao(limiteInferior + 2.0 * h)
    + 2 * funcao(limiteInferior + 3.0 * h)
  );
}

function funcaoGrauTres (funcao, limiteInferior, limiteSuperior) {
  const h = (limiteSuperior - limiteInferior) / 5.0;
  return multiply(
    chain(h)
      .multiply(5.0)
      .divide(24.0)
      .done(),
    add(
      multiply(
        11,
        funcao(add(limiteInferior, h))
      ),
      funcao(add(
        limiteInferior,
        multiply(2.0, h)
      )),
      funcao(add(
        limiteInferior,
        multiply(3.0, h)
      )),
      multiply(
        11,
        funcao(add(
          limiteInferior,
          multiply(4.0, h)
        ))
      )
    )
  );
}

function funcaoGrauQuatro (funcao, limiteInferior, limiteSuperior) {
  const h = (limiteSuperior - limiteInferior) / 6.0;
  return (h / 30) * (
    99 * funcao(limiteInferior + h)
    - 126 * funcao(limiteInferior + 2.0 * h)
    + 234 * funcao(limiteInferior + 3.0 * h)
    - 126 * funcao(limiteInferior + 4.0 * h)
    + 99 * funcao(limiteInferior + 5.0 * h)
  );
}

module.exports = {
  funcaoGrauZero,
  funcaoGrauUm,
  funcaoGrauDois,
  funcaoGrauTres,
  funcaoGrauQuatro,
};
