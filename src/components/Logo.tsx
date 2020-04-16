import React from "react";
import {ReactComponent as ImgLogo} from "../assets/images/logo.svg";

import '../assets/styles/scss/logo.scss';

export const Logo = (props:{colorClass:string}) => {
    return (
        <>
            <a href="/" className={"logo " + props.colorClass}>
                <ImgLogo/>
            </a>
        </>
    )
};