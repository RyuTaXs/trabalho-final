import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    titulo: '', diretor: '', ano: '', imagem: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const salvar = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/filmes', form)
      .then(() => {
        alert('Filme cadastrado com sucesso!');
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Novo Filme</h2>
      <form onSubmit={salvar}>
        <input name="titulo" placeholder="Título" onChange={handleChange} required /><br/><br/>
        <input name="diretor" placeholder="Diretor" onChange={handleChange} required /><br/><br/>
        <input name="ano" type="number" placeholder="Ano" onChange={handleChange} required /><br/><br/>
        <input name="imagem" placeholder="URL da Imagem (http://...)" onChange={handleChange} required /><br/><br/>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;