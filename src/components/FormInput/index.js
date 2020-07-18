import React, { useState, useEffect } from 'react';
import { validateInput, validate } from '../../helpers';
import alert from '../../assets/alert.png';
import './index.scss';

const Input = ({
  type,
  name,
  placeHolder,
  value,
  errorMsg = '',
  required,
  validateSelf,
  handleChange,
  label,
  pattern,
  title,
  Icons,
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
    event.target.style.borderRadius = '1px solid red';
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
    <div className={`input ${error ? 'err' : ''}`}>
      <label htmlFor={name}>{label}</label>
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
        {Icons ? (
          <Icons />
        ) : (
          <img src={alert} alt='nothing' className='warning' />
        )}
      </div>
      {errorMsg ? (
        <p
          className='err'
          style={{
            display: error ? 'block' : 'none',
            fontSize: '12px',
            margin: '0',
            padding: '0',
            color: 'red',
          }}
        >
          {errorMsg}
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default Input;
