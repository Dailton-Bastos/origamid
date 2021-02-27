import React from 'react';
// import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Mudou a rota');
  }, [location]);

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
