import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardFilme from '../components/CardFilme';
import { Link } from 'react-router-dom';

function Home() {
  const [filmes, setFilmes] = useState([]);

  // Busca os dados ao carregar a página (useEffect obrigatório)
  useEffect(() => {
    carregarFilmes();
  }, []);

  const carregarFilmes = () => {
    axios.get('http://localhost:3001/filmes')
      .then(res => setFilmes(res.data))
      .catch(err => console.log(err));
  };

  // Função Lift State Up: Passada para o filho deletar
  const deletar = (id) => {
    if (window.confirm("Tem certeza?")) {
      axios.delete(`http://localhost:3001/filmes/${id}`)
        .then(() => carregarFilmes())
        .catch(err => console.log(err));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Catálogo de Filmes</h1>
      <Link to="/cadastro"><button>+ Adicionar Filme</button></Link>
      <hr />
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {filmes.length > 0 ? (
          filmes.map(f => (
            <CardFilme key={f._id} filme={f} aoDeletar={deletar} />
          ))
        ) : (
          <p>Nenhum filme encontrado...</p>
        )}
      </div>
    </div>
  );
}

export default Home;