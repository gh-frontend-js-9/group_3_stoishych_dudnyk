import React from 'react';

import '../../assets/styles/scss/socialsNets.scss';

import SocialNetIcon from './SocialNetIcon';

export interface IconProps {
    themeNumber:string,
    size:string,
    position:string
}

const IconContainer:React.FC<IconProps> = (props) => {

    // let links:any = [];
    let {position, ...other} = props

    return (
        <div className={'social-nets-container social-nets-container_' + position}>
            <SocialNetIcon name={['fab','vk']} link='http://vk.com/' {...other}/>

            <SocialNetIcon name={['fab','pinterest-p']} link='https://www.pinterest.com/' {...other}/>

            <SocialNetIcon name={['fab','instagram']} link='https://www.instagram.com/' {...other}/>

            <SocialNetIcon name={['fab','twitter']} link='https://twitter.com/' {...other}/>

            <SocialNetIcon name={['fab','facebook-f']} link='https://www.facebook.com/' {...other}/>
        </div>
    )
}

export default IconContainer;
