import React from "react";
import {Backdrop} from "../../Backdrop/Backdrop";
import {SideNav} from "./SideNav";

export const SideNavWrapper = (props:{sidebarClose:() => void}) => {
    return (
            <div>
                <Backdrop onClick={props.sidebarClose}/>
                <SideNav/>
            </div>
    )
};