import React from "react";

export const BurgerMenu = (props:{onToggle: () => void, isWhite: boolean}) => {
    return (
        <div className={props.isWhite ? "burger-menu burger-menu_white": "burger-menu"} onClick={() => props.onToggle()}>
            <div className="burger-menu__line"/>
            <div className="burger-menu__line"/>
            <div className="burger-menu__line"/>
        </div>
    )
}