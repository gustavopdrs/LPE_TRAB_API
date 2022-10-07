const { Router } = require('express');

const controleElencos = require('./controladores/elencos');
const controleJogadores = require("./controladores/jogadores");
const rotas = new Router();

rotas.route('/elencos')
     .get(controleElencos.getElencos)
     .post(controleElencos.addElenco)
     .put(controleElencos.updateElenco)

rotas.route('/elencos/:codigo')
     .get(controleElencos.getElencoPorCodigo)
     .delete(controleElencos.deleteElenco)

rotas.route('/jogadores')
   .get(controleJogadores.getJogadores)
   .post(controleJogadores.addJogador)
   .put(controleJogadores.updateJogador)

rotas.route('/jogadores/:codigo')
   .get(controleJogadores.getJogadorPorCodigo)
   .delete(controleJogadores.deleteJogador)

module.exports = rotas;