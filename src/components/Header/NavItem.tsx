import React from "react";

export const NavItem = (props:{text: string, link: string}) => {
    return (
        <li className="nav-item">
            <a href={props.link} className="nav-item__link">
                {props.text}
            </a>
        </li>
    )
};