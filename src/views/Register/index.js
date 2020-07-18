import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Input from '../../components/FormInput';
import logo from '../../assets/logo.png';

import './index.scss';

const Register = () => {
      
    const [values, setValues] = useState({ fullName: '', email: '', phoneNumber: '', error: false });
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
      if(error === false ) return history.push("/options");
    } 
   return (<div className='containr-full'>
      <div id="register-top">
        <img src={logo} alt='seerbit' className='seer'/>
      </div>      
      <div id="register-middle">
      <h5>ENTER PERSONAL INFORMATION</h5>
      </div>      
    <div id='register-bottom'>
    <form id="submit" onSubmit={handleSubmit}>
      <br/>
      <Input
          type='text'
          placeHolder='Full name'
          required
          name='fullName'
          id='fullName'
          handleChange={handleChange}
          label='Full Name'
          value={values.fullName}
          errorMsg='Please enter first name and last name'
       />
      <Input
          type='email'
          placeHolder='Email'
          required
          name='email'
          id='email'
          handleChange={handleChange}
          label='Phone Number'
          value={values.email}
          errorMsg='Please enter a valid email address'
      />
        <Input
          type='number'
          placeHolder='Phone Number'
          required
          name='phoneNumber'
          id='phoneNumber'
          handleChange={handleChange}
          label='Phone Number'
          value={values.phoneNumber}
          errorMsg='Enter your phone number'
        />
        <button type="submit" className='flex-row'>
          <span>Continue</span>
        </button>
    </form>
  </div>
</div>
);
};

  
export default Register 