// == Import npm
import React from 'react';

// == Import
import './styles.css';

import Header from '../Header/index';
import Currencies from '../Currencies';
import Footer from '../Footer';

import converterData from 'src/data/currencies';

// == Composant
const Converter = () => (
  <div className="app">
    <Header />
    <Currencies currencies={converterData} />
    <Footer currencies={converterData} />
  </div>
);



// == Export
export default Converter;
