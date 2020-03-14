import React from "react";
import {NavItem} from "./NavItem";

export const Nav = (props:{sideNav:boolean}) => {
    const navigationItems = [
        {
            text: "Popular",
            href: "#"
        },
        {
            text: "New",
            href: "#"
        },
        {
            text: "Reading list",
            href: "#"
        },
        {
            text: "Topics",
            href: "#"
        }
    ];

    return (
        <nav className="nav">
            <ul className={props.sideNav ? "sidenav-items": "nav-items"}>
                {navigationItems.map(obj => <NavItem text={obj.text} link={obj.href} key={obj.text}/>)}
            </ul>
        </nav>
    )
};