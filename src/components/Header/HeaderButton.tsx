import React from "react";
import {ReactComponent as SearchImg} from "../../assets/images/search.svg"


/*const buttonStyle = {
    backgroundImage: `url(${searchImg})`,
    width: "24px",
    height: "24px"
};*/

export const HeaderButton = (props:{isWhite:boolean}) => {
    return (
        <button className={props.isWhite ? "header-button header-button_white" :"header-button"}>
            <SearchImg/>
        </button>
    )
};
