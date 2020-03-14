import React, {useState} from "react";
import {Logo} from "../Logo";
import {Nav} from "./Nav";
import {HeaderButton} from "./HeaderButton";
import {BurgerMenu} from "./BurgerMenu";
import {Backdrop} from "../Backdrop/Backdrop";
import {SideNav} from "./SideNav/SideNav";

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
                    <Logo/>
                    <div className="header-wrapper header-right">
                        <Nav sideNav={false}/>
                        <HeaderButton/>
                    </div>
                    <BurgerMenu onToggle={onBurgerMenuToggle}/>
                    {sideNavIsOpen ? (<><Backdrop onClick={sidebarClose}/> <SideNav/></>) : null}
                </div>
            </div>
        </header>
    )
};