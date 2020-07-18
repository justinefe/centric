import React from 'react';
import './CardAtmTop.scss';
import logo from '../../assets/logo.png';

const CardAtmTop = () => {
  return (
    <div className='atm-top'>
      <img src={logo} alt='seerbit' className='seer' />
      <div className='atm-details'>
        <span className='atm-email'>omotolasambolo@gmail.com</span>
        <div className='pays-wrap span-wrap-style'>
          <span>Pay:</span> <strong className='highlit-font'>NGN 503.00</strong>
        </div>
        <span className='fees-wrap span-wrap-style'>
          <span>Fee:</span> <strong className='highlit-font'>NGN 8.00</strong>
        </span>
      </div>
    </div>
  );
};

export default CardAtmTop;
