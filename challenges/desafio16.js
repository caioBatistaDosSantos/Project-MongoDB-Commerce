db.produtos
  .updateOne({
    nome: "Big Mac",
  },
    { $set: { ultimaModificacao: new Date() } });

db.produtos
  .find({ ultimaModificacao: { $exist: true } }, { nome: 1, _id: 0 });