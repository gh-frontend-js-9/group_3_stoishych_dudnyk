import React from "react";
import {ReadingCardsContainer} from "./ReadingCardsContainer";

export const ReadingList = () => {
    return (
        <div className="container">
            <div className="reading-list">

                <div className='info-container__header'>
                    <h2 className='info-container__type'>Reading lists</h2>
                    <span className='info-container__link'>View all</span>
                </div>

                <ReadingCardsContainer/>
            </div>
        </div>
    )
};