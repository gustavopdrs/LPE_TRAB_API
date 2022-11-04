const { Router } = require('express');
require('./index')
const controleElencos = require('./controladores/elencos');
const seguranca = require('./controladores/seguranca')
const controleJogadores = require("./controladores/jogadores");
const rotas = new Router();

rotas.route('/elencos')
     .get(seguranca.verificaJWT, controleElencos.getElencos)
     .post(seguranca.verificaJWT, controleElencos.addElenco)
     .put(seguranca.verificaJWT, controleElencos.updateElenco)

rotas.route('/elencos/:codigo')
     .get(seguranca.verificaJWT, controleElencos.getElencoPorCodigo)
     .delete(seguranca.verificaJWT, controleElencos.deleteElenco)

rotas.route('/jogadores')
   .get(seguranca.verificaJWT, controleJogadores.getJogadores)
   .post(seguranca.verificaJWT, controleJogadores.addJogador)
   .put(seguranca.verificaJWT, controleJogadores.updateJogador)

rotas.route('/jogadores/:codigo')
   .get(seguranca.verificaJWT, controleJogadores.getJogadorPorCodigo)
   .delete(seguranca.verificaJWT, controleJogadores.deleteJogador)

rotas.route("/login")
   .post(seguranca.login) 
   
module.exports = rotas;