import React from "react";

import { Link } from 'react-router-dom';

export const NavItem = (props:{text: string, link: string}) => {
    return (
        <li className="nav-item">
            <Link to={props.link} className="nav-item__link">
                {props.text}
            </Link>
        </li>
    )
};