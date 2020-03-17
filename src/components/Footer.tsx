import React from 'react';

import logo from '../assets/images/LogoIcon.jpg';
import '../assets/styles/scss/footer.scss';

import IconContainer from './socialNets/IconContainer';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <img src={logo} alt='Logo'/>
                
                <IconContainer />

                <p className='footer__rights'>All Rights Reserved 2018 BehindMars</p>
            </div>
        </footer>
    )
}

export default Footer;