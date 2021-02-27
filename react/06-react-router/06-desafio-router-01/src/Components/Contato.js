import React from 'react';
import Head from './Head';
import styles from './Contato.module.css';

import foto from '../img/contato.jpg';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>dailtonbastos@gmail.com</li>
          <li>(86) 98882-0145</li>
          <li>Pedro Patrício, Timon-MA</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
