import React from 'react';
// import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        {/* <Link to="/">Home</Link> | <Link to="sobre">Sobre</Link> */}
        <NavLink to="/" end activeStyle={{ color: 'tomato' }}>
          Home
        </NavLink>{' '}
        |{' '}
        <NavLink to="sobre" activeStyle={{ color: 'tomato' }}>
          Sobre
        </NavLink>
        |{' '}
        <NavLink to="login" activeStyle={{ color: 'tomato' }}>
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
