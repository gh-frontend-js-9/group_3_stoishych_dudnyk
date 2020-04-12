import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IProps {
    name: IconProp,
    link: string
}

const SocialNetIcon = (props:IProps) => {
    return (
        <a href={props.link} className='social-link social-link_theme_gray'>
            <FontAwesomeIcon icon={props.name} className='social-link__icon social-link__icon'/>
            
        </a>
    )
    
} 

export default SocialNetIcon;