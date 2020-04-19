import React from "react";
import {ReadingCardsContainer} from "./ReadingCardsContainer";

const sliderSettings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
        {
            breakpoint: 1160,
            settings:  {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 490,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
};

export const ReadingList = () => {
    return (
        <div className="container">
            <div className="reading-list">

                <div className='info-container__header'>
                    <h2 className='info-container__type'>Reading lists</h2>
                    <span className='info-container__link'>View all</span>
                </div>

                <ReadingCardsContainer settings={sliderSettings}/>
            </div>
        </div>
    )
};
