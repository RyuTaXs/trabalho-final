const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  diretor: { type: String, required: true },
  ano: { type: Number, required: true },
  imagem: { type: String, required: true }
});

module.exports = mongoose.model('Filme', FilmeSchema);