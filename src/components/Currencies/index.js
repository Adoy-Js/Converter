import React from 'react';
import PropTypes from 'prop-types';


const Currencies = ({currencies}) => (
  <div className="currencies">
    <ul className="currencies__list">
      <h1 className="title">Currencies</h1>
      {currencies.map((currency)=>(
        <li className="currency" key={currency.name}><a href={currency.name}>{currency.name}</a></li>
      ))}
    </ul>
  </div>
);

Currencies.propTypes = {
  currencies: PropTypes.array.isRequired,
};


export default Currencies;
