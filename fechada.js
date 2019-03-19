function funcaoGrauUm (funcao, limiteInferior, limiteSuperior) {
  return ((limiteSuperior - limiteInferior) / 2 * (funcao(limiteInferior) + funcao(limiteSuperior)));
}

module.exports = {
  funcaoGrauUm,
};
