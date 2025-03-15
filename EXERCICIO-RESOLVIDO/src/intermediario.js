const validarSenha = (req, res, next) => {
  const { senha } = req.query;

  if (!senha) {
    return res.send("Informe a senha!");
  }

  if (senha !== "123") {
    return res.send("Senha Incorreta");
  }

  next();
};

module.exports = {
    validarSenha
}
