import React from "react";

export const BurgerMenu = (props:{onToggle: () => void}) => {
    return (
        <div className="burger-menu" onClick={() => props.onToggle()}>
            <div className="burger-menu__line"/>
            <div className="burger-menu__line"/>
            <div className="burger-menu__line"/>
        </div>
    )
}