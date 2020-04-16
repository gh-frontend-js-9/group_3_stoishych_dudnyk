import React from 'react';

import { Logo } from './Logo';
import '../assets/styles/scss/footer.scss';

import IconContainer from './socialNets/IconContainer';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <Logo colorClass='logo_gray'/>
                
                <IconContainer themeNumber='1' size='sm' position='center'/>

                <p className='footer__rights'>All Rights Reserved 2018 BehindMars</p>
            </div>
        </footer>
    )
}

export default Footer;