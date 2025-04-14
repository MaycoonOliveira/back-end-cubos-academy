let { instrutores, identificadorAula, aulas } = require("./bancodedados");

const cadastrarAula = (req, res) => {
  const { idInstrutor } = req.params;
  const { titulo, descricao } = req.body;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(idInstrutor);
  });

  if (!instrutor) {
    return res.status(404).json({ mensagem: "O Instrutor não existe" });
  }

  const aula = {
    id: identificadorAula++,
    instrutor_id: Number(instrutor.id),
    titulo,
    descricao,
  };

  aulas.push(aula);
  return res.status(201).json(aula);
};

const listarAulas = (req, res) => {
  return res.status(200).json(aulas);
};

const obterAulaId = (req, res) => {
  const { id } = req.params;

  const aula = aulas.find((aula) => {
    return aula.id === Number(id);
  });

  if (!aula) {
    return res.status(404).json({ mensagem: "Aula não encontrada" });
  }

  return res.status(200).json(aula);
};

const obterAulasDeUmInstrutor = (req, res) => {
  const { idInstrutor } = req.params;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(idInstrutor);
  });

  if (!instrutor) {
    return res.status(404).json({ mensagem: "O Instrutor não existe" });
  }

  const aulasEncontradas = aulas.filter((aula) => {
    return aula.instrutor_id === instrutor.id;
  });

  return res.status(200).json(aulasEncontradas);
};

module.exports = {
  cadastrarAula,
  listarAulas,
  obterAulaId,
  obterAulasDeUmInstrutor,
};
