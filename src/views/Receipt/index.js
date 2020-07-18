import React from 'react';
import { useHistory } from 'react-router-dom';
import checkout from '../../assets/check.png'
import close from '../../assets/close.png'

import './index.scss';

const Receipt = () => {

    let history = useHistory;

    const handleSubmit = (event) => {
        history.push('/receipt');
    } 
    
    return(
        <div className='contianer-full contain'>
            <img src={close} alt='close' className='close'/>
            <img src={checkout} alt='check' className='check'/>
            <div className='space'>
                <h4>NGN 503.00</h4>
                <span>Your Payment is complete</span>
            </div>
            <div className='space'>
            <span>Transaction Reference:</span>
            <span>15654265656562552656cvxvc</span>
            </div>

            <button type="submit" onclick = { handleSubmit } className='flex-row'>
                <span>View Receipt</span>
             </button>
        </div>
    )
}

export default Receipt;