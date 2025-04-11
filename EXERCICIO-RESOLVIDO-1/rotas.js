const express = require('express');
const instrutores = require('./src/controladores/instrutores');
const aulas = require('./src/controladores/aulas');

const rotas = express();


rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores/:id', instrutores.obterInstrutor);
rotas.post('/instrutores', instrutores.cadastrarInstrutor);
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor); // Altera tudo
rotas.patch('/instrutores/:id/status', instrutores.atualizarInstrutor); // Altera apenas uma parte do recurso
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor);


rotas.post('/instrutores/:idInstrutor/aulas', aulas.cadastrarAula);
rotas.get('/aulas', aulas.listarAulas);
rotas.get('/aulas/:id', aulas.obterAulaId);
rotas.get('/instrutores/:idInstrutor/aulas', aulas.obterAulasDeUmInstrutor);



module.exports = rotas;