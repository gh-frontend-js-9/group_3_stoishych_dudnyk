import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IProps {
    name: IconProp;
    link: string;
    themeNumber: string;
    size: string;
}

const SocialNetIcon = (props: IProps) => (
  <a
    href={props.link}
    className={`social-link social-link_theme_${props.themeNumber
    } social-link_size_${props.size}`}
  >
    <FontAwesomeIcon icon={props.name} className="social-link__icon" />
  </a>
);

export default SocialNetIcon;
