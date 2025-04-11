const express = require('express');
const instrutores = require('./src/controladores/instrutores');

const rotas = express();


rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores/:id', instrutores.obterInstrutor);
rotas.post('/instrutores', instrutores.cadastrarInstrutor);
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor); // Altera tudo
rotas.patch('/instrutores/:id/status', instrutores.atualizarInstrutor); // Altera apenas uma parte do recurso
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor);


module.exports = rotas;