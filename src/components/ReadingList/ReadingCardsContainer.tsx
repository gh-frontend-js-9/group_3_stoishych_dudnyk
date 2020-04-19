import React, {useRef} from "react";
import {ReadingCard} from "./ReadingCard";
import Slider, { Settings } from "react-slick";
import {ReadingCardsNext} from "./ReadingCardsNext";



interface IProps {
    settings?: Settings,
    classes?:string
}

export const ReadingCardsContainer:React.FC<IProps> = ({settings}) => {
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

    // idk how to do it in normal way, but working good

    const sliderNext = useRef(null);

    const nextSliderFunc = () => {
        // @ts-ignore
        sliderNext.current.slickNext();
    };
    return (
        <div className={"reading-list-container "}>
            <Slider ref={(slider:any) => (sliderNext.current = slider)}{...settings}>
                {pseudoData.map(obj => <ReadingCard title={obj.title} key={obj.title}/>)}
            </Slider>
            <ReadingCardsNext onClick={nextSliderFunc}/>
        </div>
    )
};
