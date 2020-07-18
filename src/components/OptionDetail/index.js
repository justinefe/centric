import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

import Loader from '../Loader';

const Options = ({ isSubmitting, link, name, path }) => {
  let history = useHistory();


  const changePath = (event) => {
  event.preventDefault()
    history.push(`${path}`)
 }
  return (
    <div className='wrap-options'>
      <button type='submit' onClick={changePath} className='flex-r'>
        {isSubmitting ? (
          <div className='img-wrap'>
            <img src={link} className='options' alt='none' />{' '}
            <span> {name}</span>
          </div>
        ) : (
          <Loader size={7} color='white' />
        )}
      </button>
    </div>
  );
};
export default Options;
