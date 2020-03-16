import React from 'react';

import logo from '../assets/images/LogoIcon.jpg';
import '../assets/styles/scss/footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logo} alt='Logo'/>
            <div> Links </div>
            <p className='footer__rights'>All Rights Reserved 2018 BehindMars</p>
        </div>
    )
}

export default Footer;