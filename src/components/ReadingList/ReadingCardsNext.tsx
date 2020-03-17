import React from "react";
import rightArrow from "../../assets/images/right-arrow.png"

export const ReadingCardsNext = (props: {onClick:any}) => {
    return (
        <div className="reading-card__next" onClick={() => props.onClick()}>
            <img src={rightArrow} alt="right-arrow"/>
        </div>
    )
};