import React from 'react';

const Header = () => {
  console.log('Renderizou');
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
};

export default React.memo(Header);
