import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <Link to="">Descrição</Link>
        <Link to="avaliacao">Avaliação</Link>
        <Link to="customizado">Customizado</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;
