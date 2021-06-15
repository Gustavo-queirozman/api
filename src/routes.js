const express = require('express');
const router = express.Router();

const ControllerUsuario = require('./controllers/ControllerUsuario');
router.get('/usuarios', ControllerUsuario.buscarTodosUsuarios);//buscar todos usuarios
router.get('/usuario/:email/:senha', ControllerUsuario.buscarUmUsuario);//buscar usuario pelo email
router.post('/usuario', ControllerUsuario.inserirUsuario);//inserir usuario na base de dados
router.put('/usuario/:id', ControllerUsuario.alterarUsuario);//alterar dados do usuario

const ControllerCarrinho = require('./controllers/ControllerCarrinho');
router.get('/carrinho/:user_id', ControllerCarrinho.buscarUmCarrinho);//buscar carrinho pelo id do usuario
router.post('/carrinho', ControllerCarrinho.inserirCarrinho);//inserir carrinho do usuário na base de dados
router.put('/carrinho/:user_id', ControllerCarrinho.alterarCarrinho);//alterar dados do carrinho

const ControllerProduto = require('./controllers/ControllerProduto');
router.get('/produtos', ControllerProduto.buscarTodosProdutos);//buscar todos produtos
router.get('/produto/nome/:nome', ControllerProduto.buscarProduto);//buscar produto pelo nome
router.get('/produto/categoria/:categoria', ControllerProduto.buscarCategoria);//buscar produto pela categoria

const ControllerPedido = require('./controllers/ControllerPedido');
module.exports = router;

