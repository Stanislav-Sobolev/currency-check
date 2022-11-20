import React from 'react';

export const CurrencyField = ({ currency, className }) => {
  return (
    <div className="CurrencyField">
      <li className="currencyFieldContainer">
        <p className="currencyFieldItem">{currency}</p>
        <p className="currencyFieldItem">27.5a{className}</p>
        <p className="currencyFieldItem">27.6a</p>
      </li>
    </div>
  );
};
