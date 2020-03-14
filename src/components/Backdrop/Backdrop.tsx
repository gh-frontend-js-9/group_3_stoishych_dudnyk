import React from "react";

export const Backdrop = (props:{onClick: () => void}) => {
    return (
        <div className="backdrop" onClick={() => props.onClick()}/>
    )
};