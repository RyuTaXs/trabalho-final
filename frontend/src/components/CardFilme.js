import React from 'react';
import styles from './Card.module.css'; // Usando CSS Modules
import { Link } from 'react-router-dom';

function CardFilme({ filme, aoDeletar }) {
  return (
    <div className={styles.card}>
      <img src={filme.imagem} alt={filme.titulo} className={styles.imagem} />
      <h3>{filme.titulo}</h3>
      <p><strong>Diretor:</strong> {filme.diretor}</p>
      <p><strong>Ano:</strong> {filme.ano}</p>
      
      <div className={styles.botoes}>
        <Link to={`/editar/${filme._id}`}>
          <button className={`${styles.btn} ${styles.btnEditar}`}>Editar</button>
        </Link>
        
        {/* onClick obrigatório */}
        <button 
          className={`${styles.btn} ${styles.btnExcluir}`} 
          onClick={() => aoDeletar(filme._id)}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default CardFilme;