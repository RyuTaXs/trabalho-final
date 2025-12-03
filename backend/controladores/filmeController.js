const Filme = require('../modelos/Filme');

// Listar todos (GET)
exports.listarFilmes = async (req, res) => {
  try {
    const filmes = await Filme.find();
    res.json(filmes);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar filmes" });
  }
};

// Criar novo (POST)
exports.criarFilme = async (req, res) => {
  try {
    const novoFilme = new Filme(req.body);
    await novoFilme.save();
    res.status(201).json(novoFilme);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao salvar filme" });
  }
};

// Editar (PUT)
exports.editarFilme = async (req, res) => {
  try {
    const id = req.params.id;
    const filmeAtualizado = await Filme.findByIdAndUpdate(id, req.body, { new: true });
    res.json(filmeAtualizado);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao atualizar" });
  }
};

// Excluir (DELETE)
exports.deletarFilme = async (req, res) => {
  try {
    const id = req.params.id;
    await Filme.findByIdAndDelete(id);
    res.json({ mensagem: "Filme removido com sucesso" });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao deletar" });
  }
};