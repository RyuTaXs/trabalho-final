import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Editar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    titulo: '', diretor: '', ano: '', imagem: ''
  });

  useEffect(() => {
    // Busca todos e filtra (simples para trabalho escolar)
    axios.get('http://localhost:3001/filmes')
      .then(res => {
        const item = res.data.find(f => f._id === id);
        if (item) setForm(item);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const editar = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/filmes/${id}`, form)
      .then(() => {
        alert('Editado com sucesso!');
        navigate('/');
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Editar Filme</h2>
      <form onSubmit={editar}>
        <input name="titulo" value={form.titulo} onChange={handleChange} required /><br/><br/>
        <input name="diretor" value={form.diretor} onChange={handleChange} required /><br/><br/>
        <input name="ano" value={form.ano} onChange={handleChange} required /><br/><br/>
        <input name="imagem" value={form.imagem} onChange={handleChange} required /><br/><br/>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default Editar;