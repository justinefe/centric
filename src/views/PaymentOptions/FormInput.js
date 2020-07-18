import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Loader from '../../components/Loader';
import Input from '../../components/FormInput';
import logo from '../../assets/logo.png';

import './index.scss';


const Options = (isSubmitting) => {
    const [values, setValues] = useState({ amount: '', error: false });
    let history = useHistory();

    const handleChange = (event, error) => {
      event.persist()
      setValues(values => ({
        ...values, error,
        [event.target.name]: event.target.value
      }));
    };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const { error } = values;
    if(error === false ) return history.push("/bank");
  } 
 return (
     <div className='contianer-half'>
          <img src={logo} alt='seerbit' style={{marginBottom: '65px'}}  
          className='seer'/>
     <form id="submit" onSubmit={handleSubmit}>
     <Input
          type='number'
          placeHolder='Enter Amount'
          required
          name='amount'
          id='amount'
          handleChange={handleChange}
          value={values.amount}
          style={{marginBottom: '8px'}}
          errorMsg='Please enter a valid amount'
      />
      <button type="submit" className='flex-row'>
      {!isSubmitting ? (<Loader size={7} color="white" />) :
      <span>Pay</span>}
    </button>
      </form>
     </div>
 )
}

export default Options;