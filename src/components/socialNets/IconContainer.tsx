import React from 'react';

import '../../assets/styles/scss/socialsNets.scss';

import SocialNetIcon from './SocialNetIcon';

const IconContainer = () => {
    return (
        <div className='social-nets-container'>
            <SocialNetIcon name={['fab','vk']} link='http://vk.com/'/>

            <SocialNetIcon name={['fab','pinterest-p']} link='https://www.pinterest.com/'/>

            <SocialNetIcon name={['fab','instagram']} link='https://www.instagram.com/'/>

            <SocialNetIcon name={['fab','twitter']} link='https://twitter.com/'/>

            <SocialNetIcon name={['fab','facebook-f']} link='https://www.facebook.com/'/>
        </div>
    )
}

export default IconContainer;