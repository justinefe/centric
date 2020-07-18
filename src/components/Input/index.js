import React, { useState, useEffect } from 'react';
import { validateInput, validate } from '../../helpers';
import alert from '../../assets/alert.png';
import './index.scss';


const Input = ({
  type = 'text',
  name,
  placeHolder = 'place Holder',
  value,
  errorMsg = '',
  required,
  validateSelf,
  handleChange,
  reviel,
  revielPassword,
  style,
  pattern,
  title
}) => {
  const [error, setError] = useState(false);

  const inputRef = React.createRef();

  useEffect(() => {
    if (validateSelf) {
      const isValid = validate(value, name);

      if (!isValid) {
        inputRef.current.classList.add('typing', 'invalid');
        setError(true);
      }
    }

    return () => {};
  }, [inputRef, name, validateSelf, value]);

  const validateOne = (event) => {
    handleChange(event, error);
    if (!validateInput(event)) {
      inputRef.current.classList.add('invalid');
      setError(true);
    } else {
      inputRef.current.classList.remove('invalid');
      setError(false);
    }
  };

  return (
    <div className='input-div'>
      <div className='input'>
      <div className='input-wrap'>
      <input
      ref={inputRef}
      type={type}
      placeholder={placeHolder}
      onChange={validateOne}
      name={name}
      required={required}
      value={value}
      pattern={pattern}
      title={title}
      auto={false}
      />
      <img src={alert} alt='nothing' className='warning'/>
    </div>
        {value && type === 'password' ? (
          <span onClick={revielPassword} className='reviel-password'>
          </span>
        ) : null}
      </div>
      <p className='error' style={{ display: error ? 'block' : 'none' }}>
        {errorMsg}
      </p>
    </div>
  );
};

export default Input;
