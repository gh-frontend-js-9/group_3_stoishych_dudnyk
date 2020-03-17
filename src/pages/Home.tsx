import React, { useState, useEffect } from "react";
      
import {Hero} from "../components/Hero/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import InfoCardContainer from '../components/CardComponents/InfoCardContainer';
import PhotoCardsContainer from "../components/CardComponents/PhotoCardsContainer";

import { IResponse, kindaServerResponse } from '../Data';
import {ReadingList} from "../components/ReadingList/ReadingList";

      
export const Home = () => {
      
    let [data, setData] = useState<IResponse>({thematic: [], other: []});
    
    useEffect(() => {
        setData(kindaServerResponse);
    }, []);
    
    const sliderSettings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
      
    return (
        <main>
            <Slider {...sliderSettings}>
                <Hero/>
                <Hero/>
                <Hero/>
            </Slider>
        
            {
                data.thematic.map(el => {
                    return <InfoCardContainer {...el} key={el.type}/>
                })
            }
        
            <ReadingList/>
        
            <PhotoCardsContainer cards={data.other}/>
        
        
        </main>
    )
};