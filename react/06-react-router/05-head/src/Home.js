import React from 'react';
// import Head from './Head';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      {/* <Head title="Home" description="Essa é a descrição da Home" /> */}
      <Helmet>
        <title>Dogs | Home</title>
        <meta name="description" content="Essa é a descrição da Home" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossorigin="anonymous"
        ></link>
      </Helmet>

      <h1>Home</h1>
      <p>Essa é a Home</p>
    </div>
  );
};

export default Home;
