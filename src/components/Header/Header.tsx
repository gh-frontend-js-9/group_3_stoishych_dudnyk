import React, {useState} from "react";
import {Logo} from "../Logo";
import {Nav} from "./Nav";
import {HeaderButton} from "./HeaderButton";
import {BurgerMenu} from "./BurgerMenu";
import {CSSTransition} from "react-transition-group";
import {SideNavWrapper} from "./SideNav/SideNavWrapper";

export const Header = () => {
    const [sideNavIsOpen, setSideNavIsOpen] = useState(false);

    const onBurgerMenuToggle = () => {
        setSideNavIsOpen(!sideNavIsOpen);
    };

    const sidebarClose = () => {
        setSideNavIsOpen(false);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-wrapper header-left">
                        <Logo colorClass='logo_white'/>
                        <Nav sideNav={false}/>
                    </div>
                    <HeaderButton isBlack={false}/>
                    <BurgerMenu isWhite={true} onToggle={onBurgerMenuToggle}/>
                </div>
            </div>
            <CSSTransition in={sideNavIsOpen} timeout={200} classNames="sidenav-wrapper" unmountOnExit>
                <SideNavWrapper sidebarClose={sidebarClose}/>
            </CSSTransition>
        </header>
    )
};