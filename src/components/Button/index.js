import React from 'react';
import Loader from '../Loader'

import './index.scss';

const Button = ({ isSubmitting, icon, name }) => {
    // isSubmitting = false;
    return (<div>
        <button type="submit" disabled={isSubmitting} className='flex-row'>
            {isSubmitting ? (<Loader size={7} color="white" />) : ( 
            <span> <icon>{icon}</icon>{name}</span>)}
         </button>
        </div>)
}

export default Button;