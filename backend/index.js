const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rotasFilmes = require('./rotas/filmes');

const app = express();

app.use(cors());
app.use(express.json());

// Conexão com o banco de dados
const CONEXAO_MONGO = 'mongodb+srv://hardlley_db_user:trabalho123@trabalho-final.lij6kom.mongodb.net/'; 

mongoose.connect(CONEXAO_MONGO)
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch((erro) => console.log("Erro ao conectar no banco:", erro));

// Usar as rotas
app.use('/filmes', rotasFilmes);

// Iniciar servidor
app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});