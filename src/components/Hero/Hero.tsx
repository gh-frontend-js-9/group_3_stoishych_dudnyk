import React from "react";

export const Hero = (props:{author:string, title: string, subtitle: string}) => {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero-wrapper">
                    <p className="hero__author">
                        {props.author}
                    </p>
                    <h1 className="hero__title">{props.title}</h1>
                    <h3 className="hero__subtitle">{props.subtitle}</h3>
                </div>
            </div>
        </div>
    )
};