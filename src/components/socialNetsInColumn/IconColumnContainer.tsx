import React from 'react';
import SocialNetIcon from "../socialNets/SocialNetIcon";
import {IconProps} from "../socialNets/IconContainer";

export const IconColumnContainer: React.FC<IconProps> = (props) => {
    return (
        <section className="post-social">
            <SocialNetIcon name={['fab','facebook-f']} link='https://www.facebook.com/' {...props}/>
            <SocialNetIcon name={['fab','twitter']} link='https://twitter.com/' {...props}/>
            <SocialNetIcon name={['fab','instagram']} link='https://www.instagram.com/' {...props}/>
            <SocialNetIcon name={['fab','pinterest-p']} link='https://www.pinterest.com/' {...props}/>
        </section>

    )
};
