import React from 'react';
import copy from '../../../assets/copy.png';
import CardAtmTop from '../../../components/CardAtmTop';
import './index.scss';

const BankTransfer = () => {
    const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='contianer-neutral'>
      <CardAtmTop />
      <form id='submit' onSubmit={handleSubmit}>
        <br />

        <div className='custom-select'>
          <select>
            <option value='10'>Nissan</option>
            <option value='11'>Toyota</option>
            <option value='12'>Volvo</option>
          </select>
        </div>
      </form>
      <div id='main'>
        <div>
          <p className='kindly-proceed'>
            Kindly proceed to your internet banking app to complete your bank
            transfer payment to ONE SOURCE
          </p>
        </div>
        <div id='info'>
          <div className='info-content'>
            <span>Amount</span> <strong>NGN 503.00</strong>
          </div>
          <div className='info-content'>
            <span>Account Number</span> <strong>5030000000</strong>
          </div>
          <div className='info-content'>
            <span>Bank Name</span> <strong>Ruby Bank</strong>
          </div>
          <div className='info-content'>
            <span>Beneficiary Name</span> <strong>Centric Gateway</strong>
          </div>
        </div>
        <div id='ussd'>
          <span style={{ color: 'black' }}>*737*2*503*5030000000#</span>{' '}
          <img src={copy} id='copy' alt='not now' />
        </div>
        <span className='generated-account'>
          Generated account number expires in 48 hours
        </span>
      </div>
    </div>
  );
};

export default BankTransfer;
