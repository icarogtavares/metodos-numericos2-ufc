function funcaoGrauUm (funcao, limiteInferior, limiteSuperior) {
  return (limiteSuperior - limiteInferior) / 2.0 * (funcao(limiteInferior) + funcao(limiteSuperior));
}

function funcaoGrauDois (funcao, limiteInferior, limiteSuperior) {
  const h = (limiteSuperior - limiteInferior) / 2.0;
  return h / 3.0 * (funcao(limiteInferior) + 4 * funcao(limiteInferior + h) + funcao(limiteSuperior));
}

function funcaoGrauTres (funcao, limiteInferior, limiteSuperior) {
  const h = (limiteSuperior - limiteInferior) / 3.0;
  return 9 * h / 24 * (
    funcao(limiteInferior)
    + 3 * funcao(limiteInferior + h)
    + 3 * funcao(limiteInferior + 2 * h)
    + funcao(limiteSuperior)
  );
}

function funcaoGrauQuatro (funcao, limiteInferior, limiteSuperior) {
  const h = (limiteSuperior - limiteInferior) / 4.0;
  return 16 * h / 360 * (
    7.0 * funcao(limiteInferior)
    + 32.0 * funcao(limiteInferior + h)
    + 12.0 * funcao(limiteInferior + 2.0 * h)
    + 32.0 * funcao(limiteInferior + 3.0 * h)
    + 7.0 * funcao(limiteSuperior)
  );
}

module.exports = {
  funcaoGrauUm,
  funcaoGrauDois,
  funcaoGrauTres,
  funcaoGrauQuatro,
};
