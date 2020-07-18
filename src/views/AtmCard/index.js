import React from 'react';
import Atm from './Main'
import transfer from '../../assets/transfer.png';
import wallet from '../../assets/wallet.png';
import bank from '../../assets/bank.png';
import OptionDetail from '../../components/OptionDetail'

import './index.scss';

const PaymentOptions = () => {
  return (
    <div>
        <Atm/>
        <OptionDetail isSubmitting={true} link={bank} name = {'Pay with bank'} path = {'/bank'}/>
        <OptionDetail isSubmitting={true} link={transfer} name = {'Pay with Bank Transfer'} 
        path = {'/transfer'}/>
        <OptionDetail isSubmitting={true} link={wallet} name = {'Pay with Wallet'} path={'/'}/>
    </div>
  );
}

export default PaymentOptions;
