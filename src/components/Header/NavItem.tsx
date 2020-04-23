import React from 'react';

import { Link } from 'react-router-dom';

export const NavItem = (props: {text: string; link: string; isWhite: boolean | undefined}) => (
  <li className="nav-item">
    <Link
      to={props.link}
      className={props.isWhite ? 'nav-item__link nav-item__link_white'
        : 'nav-item__link'}
    >
      {props.text}
    </Link>
  </li>
);
