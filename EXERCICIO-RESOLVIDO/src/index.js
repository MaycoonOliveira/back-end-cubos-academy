const express = require('express');
const { listagemCarros, obterCarro } = require("./controladores/carros");
const { validarSenha } = require("./intermediario")

const app = express();

app.use(validarSenha);

//precisa passar a senha para o Middleware validar
//http://localhost:3000/carros/5?senha=123
app.get('/carros', listagemCarros);
app.get('/carros/:id', obterCarro);

app.listen(3000)