import React from 'react';

import logo from '../assets/images/LogoIcon.jpg';
import '../assets/styles/scss/footer.scss';

import IconContainer from './socialNets/IconContainer';

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logo} alt='Logo'/>
            <IconContainer />
            <p className='footer__rights'>All Rights Reserved 2018 BehindMars</p>
        </div>
    )
}

export default Footer;