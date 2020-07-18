import React, { useState, useEffect } from 'react';
import Loader from '../../../components/Loader';
import Input from '../../../components/FormInput';
import CardAtmTop from '../../../components/CardAtmTop'

import './index.scss';

const Atm = (isSubmitting) => {
    const [values, setValues] = useState({ pin: '' });

    const handleChange = event => {
      event.persist()
      setValues(values => ({
        ...values,
        [event.target.name]: event.target.value
      }));
    };
    useEffect(() => {
    });
  
  const handleSubmit = (event) => {
    event.preventDefault();
  } 

    return (
        <div className='contianer-half'>
          <CardAtmTop />
        <form id="submit" onSubmit={handleSubmit}>
      <br/>
      <Input
          type='number'
          placeHolder='Enter Card Pin'
          required
          name='pin'
          id='pin'
          handleChange={handleChange}
          // label='Full Name'
          value={values.pin}
        //   errorMsg='Invalid card details'
       />
             <button type="submit" disabled={isSubmitting} className='flex-row'>
          {!isSubmitting ? (<Loader size={7} color="white" />) :
          <span>Continue</span>}
        </button>
    </form>
        
        </div>
    )
}

export default Atm;