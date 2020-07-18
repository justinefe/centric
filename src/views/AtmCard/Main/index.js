import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../../components/FormInput';
import CardAtmTop from '../../../components/CardAtmTop';

import './index.scss';

const CardIcons = () => (
  <div className='wrap-img'>
    <img
      src='https://res.cloudinary.com/dmyu8akhu/image/upload/v1595226247/mastercard_hle3je.svg'
      alt=''
    />
    <img
      src='https://res.cloudinary.com/dmyu8akhu/image/upload/v1595226249/visa_zdtzqh.png'
      alt=''
    />
    <img
      src='https://res.cloudinary.com/dmyu8akhu/image/upload/v1595226247/mastercard_hle3je.svg'
      alt=''
    />
  </div>
);
const Atm = () => {
  const [values, setValues] = useState({
    cardNumber: '',
    mm: '',
    yy: '',
    cvv: '',
  });

  let history = useHistory;

  const handleChange = (event, err) => {
    event.persist();
    setValues((values) => ({
      ...values, 
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { error } = values;
    if(!error) return history.push('/card-pin')
  };

  return (
    <div className='contianer-middle'>
      <CardAtmTop />
      <form id='submit' onSubmit={handleSubmit}>
        <br />
        <div className='card-no'>
          <Input
            type='number'
            placeHolder='Card Number'
            required
            name='cardNumber'
            id='cardNumber'
            handleChange={handleChange}
            Icons={CardIcons}
            value={values.cardNumber}
            errorMsg='Invalid card details'
          />
        </div>
        <div className='atm-double'>
          <Input
            type='number'
            placeHolder='MM'
            required
            name='mm'
            id='mm'
            className='mm'
            handleChange={handleChange}
            value={values.mm}

          />

          <Input
            type='number'
            placeHolder='YY'
            required
            className='yy'
            name='yy'
            id='yy'
            handleChange={handleChange}
            value={values.yy}
          />
          <Input
            type='number'
            placeHolder='CVV'
            required
            name='cvv'
            className='cvv'
            id='cvv'
            handleChange={handleChange}
            value={values.cvv}
          />
        </div>
        <button type='submit' className='flex-row'>
          <span>Pay</span>
        </button>
      </form>
    </div>
  );
};

export default Atm;
