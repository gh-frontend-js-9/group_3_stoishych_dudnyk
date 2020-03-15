import React from "react";
import {ReactComponent as ImgLogo} from "../assets/images/logo.svg";


export const Logo = (props:{isWhite:boolean}) => {
    return (
        <>
            <a href="/" className={props.isWhite ? "logo-white" : "logo"}>
                <ImgLogo/>
            </a>
        </>
    )
};