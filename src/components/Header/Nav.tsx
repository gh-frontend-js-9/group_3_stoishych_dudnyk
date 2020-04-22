import React from "react";
import {NavItem} from "./NavItem";

export const Nav = (props:{sideNav:boolean, isWhite?: boolean | undefined}) => {
    const navigationItems = [
        {
            text: "Home",
            href: "/"
        },
        {
            text: "Authors",
            href: "/author?id=all"
        },
    ];

    return (
        <nav className={props.sideNav ? "sidenav-wrapper" :"nav"}>
            <ul className={props.sideNav ? "sidenav-items": "nav-items"}>
                {navigationItems.map(obj => <NavItem text={obj.text}
                                                     link={obj.href}
                                                     key={obj.text}
                                                     isWhite={props.isWhite}
                />)}
            </ul>
        </nav>
    )
};
