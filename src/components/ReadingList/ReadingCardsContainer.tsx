import React, {useRef} from "react";
import {ReadingCard} from "./ReadingCard";
import Slider from "react-slick";
import {ReadingCardsNext} from "./ReadingCardsNext";

export const ReadingCardsContainer = () => {
    //just to make more then 3 elements in slider, when categories will be more then 4-5, then I'll parse it from back
    const pseudoData = [
        {
            title: "UI design",
            href: "#"
        },
        {
            title: "UX design",
            href: "#"
        },
        {
            title: "SEO",
            href: "#"
        },
        {
            title: "Popular",
            href: "#"
        },
        {
            title: "Essential",
            href: "#"
        },
        {
            title: "React",
            href: "#"
        },
        {
            title: "Angular",
            href: "#"
        }
    ];

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
            }
        ]
    };
    // idk how to do it in normal way, but working good
   /* const [state, setState] = useState(null);*/

    const sliderNext = useRef(null);

    const nextSliderFunc = () => {
        // @ts-ignore
        sliderNext.current.slickNext();
    };
    return (
        <div className="reading-list-container">
            <Slider ref={(slider:any) => (sliderNext.current = slider)}{...sliderSettings}>
                {pseudoData.map(obj => <ReadingCard title={obj.title} key={obj.title}/>)}
            </Slider>
            <ReadingCardsNext onClick={nextSliderFunc}/>
        </div>
    )
};