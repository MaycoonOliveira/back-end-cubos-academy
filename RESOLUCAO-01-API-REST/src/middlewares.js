const validaSenha = (req, res, next) => {
  const { senha } = req.query;

  if (senha !== "cubos123") {
    return res.status(401).json({ message: "Acesso não autorizado" });
  }

  next();
};

module.exports = validaSenha;
