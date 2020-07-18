import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Input from '../../../components/FormInput';
// import logo from '../../../assets/logo.png'
import CardAtmTop from '../../../components/CardAtmTop';

import './index.scss';

const Bank = () => {
  const [values, setValues] = useState({ accountNumber:'', error: false });
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
    if(error === !false ) return history.push("/receipt");
  } 
    return (
        <div className='modified'>
        <CardAtmTop />
        <form id="submit" onSubmit={handleSubmit}>
      <br/>
      <div className='custom-select'>
          <select style={{ marginBottom: '13px'}}>
            <option value='10'>Select Bank</option>
            <option value='11'>Toyota</option>
            <option value='12'>Volvo</option>
          </select>
        </div>
      <Input
          type='number'
          placeHolder='Enter Account Number'
          required
          name='accountNumber'
          id='accountNumber'
          handleChange={handleChange}
          value={values.accountNumber}
       />
       <button type="submit" className='flex-row'>
       <span>Pay</span>
     </button>
    </form>
        
        </div>
    )
}

export default Bank;