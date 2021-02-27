import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" end activeStyle={{ color: 'tomato' }}>
          Home
        </NavLink>{' '}
        |{' '}
        <NavLink to="sobre" activeStyle={{ color: 'tomato' }}>
          Sobre
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
