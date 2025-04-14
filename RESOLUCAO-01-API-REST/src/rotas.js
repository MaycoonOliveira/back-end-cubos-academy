const express = require('express');
const  { obterAlunos } = require('./controller/alunoController');
const  { obterAlunoPorId } = require('./controller/alunoController');
const  { adicionarAluno } = require('./controller/alunoController');
const  { atualizarAluno } = require('./controller/alunoController');
const  { atualizarStatusAluno } = require('./controller/alunoController');
const  { excluirAluno } = require('./controller/alunoController');

const rotas = express();

rotas.get('/alunos', obterAlunos);
rotas.get('/alunos/:id', obterAlunoPorId);
rotas.post('/alunos', adicionarAluno);
rotas.put('/alunos/:id', atualizarAluno);
rotas.patch('/alunos/:id/status', atualizarStatusAluno); 
rotas.delete('/alunos/:id', excluirAluno);


module.exports = rotas;