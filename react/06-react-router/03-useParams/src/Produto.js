import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  // Info da rota atual
  const location = useLocation();
  const search = new URLSearchParams(location.search);

  console.log(search.get('q'));

  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  );
};

export default Produto;
