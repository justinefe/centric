import React, { Fragment } from 'react';
import card from '../../assets/credit-card.png';
import wallet from '../../assets/wallet.png';
import bank from '../../assets/bank.png';
import OptionDetail from '../../components/OptionDetail';
import BankTransfer from './Main'

const Transfer = () =>{
    return( 
        <Fragment>
        <OptionDetail isSubmitting={true} link={bank} name = {'Pay with bank'} path = {'/bank'}/>
        <OptionDetail isSubmitting={true} link={card} name = {'Pay with Card'} path = {'/card'}/>
        <BankTransfer/>
        <OptionDetail isSubmitting={true} link={wallet} name = {'Pay with Wallet'} path = {'/'}/>
        </Fragment>
    )
}
export default Transfer;