function funcaoGrauZero (funcao, limiteInferior, limiteSuperior) {
  const h = limiteInferior + limiteSuperior / 2.0;
  return (limiteSuperior - limiteInferior) * funcao(h);
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
  return h * 5.0 / 24.0 * (
    11 * funcao(limiteInferior + h) + funcao(limiteInferior + 2.0 * h)
    + funcao(limiteInferior + 3.0 * h) + 11 * funcao(limiteInferior + 4.0 * h)
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
