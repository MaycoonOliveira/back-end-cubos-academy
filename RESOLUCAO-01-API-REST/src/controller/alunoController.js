const alunosdb = require("../data/alunosDB");

let idProxiomoAlunoCriado = 1;

const obterAlunos = (req, res) => {
  return res.status(200).json(alunosdb);
};

const obterAlunoPorId = (req, res) => {
  const idRequisitado = Number(req.params.id);

  if (isNaN(idRequisitado)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  const aluno = alunosdb.find((aluno) => aluno.id === idRequisitado);

  if (!aluno) {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }

  return res.status(200).json(aluno);
};

const adicionarAluno = (req, res) => {
  const { nome, sobrenome, idade, curso, status } = req.body;

  if (!nome) {
    return res.status(400).json({ message: "O nome deve ser informado." });
  }

  if (!sobrenome) {
    return res.status(400).json({ message: "O sobrenome deve ser informado." });
  }

  if (!idade) {
    return res.status(400).json({ message: "A idade deve ser informada." });
  }

  if (!curso) {
    return res.status(400).json({ message: "O curso deve ser informado." });
  }

  if (idade < 18) {
    return res.status(400).json({
      message: "O aluno a ser cadastrado, deve ter pelo menos 18 anos.",
    });
  }

  const novoAluno = {
    id: idProxiomoAlunoCriado,
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    curso: curso,
    status: status ?? "Ativo",
  };

  alunosdb.push(novoAluno);

  idProxiomoAlunoCriado++;

  return res.status(201).json(novoAluno);
};

const atualizarAluno = (req, res) => {
  const idRequisitado = Number(req.params.id);
  const { nome, sobrenome, idade, curso, status } = req.body;

  if (isNaN(idRequisitado)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  const aluno = alunosdb.find((aluno) => aluno.id === idRequisitado);

  if (!aluno) {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }

  if (!nome) {
    return res.status(400).json({ message: "O nome deve ser informado." });
  }

  if (!sobrenome) {
    return res.status(400).json({ message: "O sobrenome deve ser informado." });
  }

  if (!idade) {
    return res.status(400).json({ message: "A idade deve ser informada." });
  }

  if (!curso) {
    return res.status(400).json({ message: "O curso deve ser informado." });
  }

  if (!status) {
    return res.status(400).json({ message: "O status deve ser informado." });
  }

  if (idade < 18) {
    return res.status(400).json({
      message: "O aluno a ser cadastrado, deve ter pelo menos 18 anos.",
    });
  }

  aluno.nome = nome;
  sobrenome.nome = sobrenome;
  idade.nome = idade;
  curso.nome = curso;
  status.nome = status;


  return res.status(200).json({ mensagem: "Aluno Atualizado com sucesso", aluno });
};

const atualizarStatusAluno = (req, res) => {
  const idRequisitado = Number(req.params.id);
  const { status } = req.body;

  if (isNaN(idRequisitado)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  const aluno = alunosdb.find((aluno) => aluno.id === idRequisitado);

  if (!aluno) {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }

  aluno.status = status;

  return res.status(200).json({ message: "Status Atualizado com sucesso" });
};

const excluirAluno = (req, res) => {
  const idRequisitado = Number(req.params.id);

  if (isNaN(idRequisitado)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  const indiceAlunoExclusao = alunosdb.findIndex(
    (aluno) => aluno.id === idRequisitado
  );

  if (!indiceAlunoExclusao < 0) {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }

  const alunoExcluido = alunosdb.splice(indiceAlunoExclusao, 1)[0];
  // splice vai remover um elemnto de dentro do array, partindo do indice daquele elemento. Um ou mais elementos

  return res
    .status(200)
    .json({ message: "Aluno Excluído com sucesso", alunoExcluido });
};

module.exports = {
  obterAlunos,
  obterAlunoPorId,
  adicionarAluno,
  excluirAluno,
  atualizarAluno,
  atualizarStatusAluno,
};
