import React from "react";
import {ReactComponent as SearchImg} from "../../assets/images/search.svg"
import Search from '../Search';

export const HeaderButton = (props:{isWhite:boolean}) => {
    return (
        <button className={props.isWhite ? "header-button header-button_white" :"header-button"}>
            <Search classes="sidenav__search" isUnderline={false}/>
        </button>
    )
};
