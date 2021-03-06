import React from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'REMOVER':
      return state.filter((item) => item !== action.content);

    case 'ADICIONAR':
      return [...state, action.content];

    default:
      throw new Error();
  }
}

const Exemplo = () => {
  const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Uva']);

  function remover() {
    dispatch({ type: 'REMOVER', content: 'Banana' });
  }

  function adicionar() {
    dispatch({ type: 'ADICIONAR', content: 'Limão' });
  }

  return (
    <div>
      <button onClick={remover}>Remover banana</button>

      <button onClick={adicionar}>Adicionar limão</button>

      {state}
    </div>
  );
};

export default Exemplo;
