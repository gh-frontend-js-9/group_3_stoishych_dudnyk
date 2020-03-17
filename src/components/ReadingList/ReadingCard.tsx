import React from "react";

export const ReadingCard = (props: {title:string}) => {
    return (
        <div className="reading-card">
            <div className="reading-card__img-container">
                <div className="reading-card__img"/>
                <div className="reading-card__img_hover"/>
            </div>
            <div className="reading-card__title">
                {props.title}
            </div>
        </div>
    )
};