const math = require('mathjs');

const Funcoes = new Map();

Funcoes.set('Quadrado', math.square);
Funcoes.set('Cubo', math.cube);
Funcoes.set('Seno', math.sin);
Funcoes.set('Cosseno', math.cos);

const funcoesName = Array.from(Funcoes.keys());

function getFuncaoByName (name) {
  return Funcoes.get(name);
}

module.exports = {
  funcoesName,
  getFuncaoByName,
};
