import React from 'react';
import Main from './Main'
import card from '../../assets/credit-card.png';
import transfer from '../../assets/transfer.png';
import wallet from '../../assets/wallet.png';
import OptionDetail from '../../components/OptionDetail'

import './index.scss';

const PayWithBank = () => {
  return (
    <div>
        <OptionDetail isSubmitting={true} link={card} name = {'Pay with Card'} path = {'/card'}/>
        <Main/>
        <OptionDetail isSubmitting={true} link={transfer} name = {'Pay with Bank Transfer'} path = {'/bank'}/>
        <OptionDetail isSubmitting={true} link={wallet} name = {'Pay with Wallet'} path = {'/'}/>
    </div>
  );
}

export default PayWithBank;
