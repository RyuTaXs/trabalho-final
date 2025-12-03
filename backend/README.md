API - Acervo de Filmes (Backend)

Este é o servidor backend do projeto final de Linguagem de Programação para Internet. Ele fornece uma API REST para gerenciar um catálogo de filmes

Tecnologias Utilizadas
- Node.js
- Express
- MongoDB (Atlas)
- Mongoose

Como Rodar o Projeto

1. Abra o terminal na pasta "backend".
2. Instale as dependências:
   npm install
3. Inicie o servidor:
   node index.js
   (O servidor rodará na porta 3001)

Documentação da API (Endpoints)

1. Listar todos os filmes
Retorna a lista completa de filmes cadastrados.
- Método: GET
- URL: /filmes

2. Cadastrar um filme
Cria um novo registro no banco de dados.
- Método: POST
- URL: /filmes
- Exemplo de JSON:
  {
    "titulo": "Nome do Filme",
    "diretor": "Nome do Diretor",
    "ano": 2024,
    "imagem": "http://link-da-imagem.com/foto.jpg"
  }

3. Editar um filme
Atualiza os dados de um filme existente pelo ID.
- Método: PUT
- URL: /filmes/:id

4. Excluir um filme
Remove um filme do banco de dados.
- Método: DELETE
- URL: /filmes/:id