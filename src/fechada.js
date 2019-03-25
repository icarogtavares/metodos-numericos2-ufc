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

module.exports = {
  funcaoGrauUm,
  funcaoGrauDois,
  funcaoGrauTres,
};
