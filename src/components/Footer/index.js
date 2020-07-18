import React from 'react';
import logo from '../../assets/logo.png';

import './index.scss';

const Footer = () => {
 return (
     <div id='footer'>
        <h4>Powered By</h4>
        <img className='footer-img' src={logo} alt='logo'/>
     </div>
 )
};

export default Footer;