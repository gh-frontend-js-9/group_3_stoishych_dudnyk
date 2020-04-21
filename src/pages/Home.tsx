import React from "react";

import Spinner from '../components/Spinner';
import '../assets/styles/scss/pages/main.scss';

import {Hero} from "../components/Hero/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import InfoCardContainer from '../components/CardComponents/InfoCardContainer';
import PhotoCardsContainer from "../components/CardComponents/PhotoCardsContainer";

import {ReadingList} from "../components/ReadingList/ReadingList";

import {heroData} from "../components/Hero/HeroData";
import { useSelector } from "react-redux";
import {DocsState} from "../interfaces/docs";

export const Home = () => {

    const popular = useSelector((state: DocsState) => state.popular);
    const essential = useSelector((state: DocsState) => state.essential);
    const freelance = useSelector((state: DocsState) => state.freelance);


    const sliderSettings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // I think that hero should be static element because user should immediately see first content and
    // parsing hero section from back wont show content right now
    return (
        <main className='main main_bg_light-gray'>
            <Slider {...sliderSettings}>
                {heroData.map((obj, index) =>
                    <Hero author={obj.author}
                          title={obj.title}
                          subtitle={obj.subtitle}
                          key={index}/>)}
            </Slider>

            <div className='main__container'>


                {popular.payload !== undefined
                    ? <InfoCardContainer payload={popular.payload} />
                    : <Spinner size={2}/>
                }

                {essential.payload !== undefined
                    ? <InfoCardContainer {...essential} />
                    : <Spinner size={2}/>
                }

                {freelance.payload !== undefined
                    ? <InfoCardContainer {...freelance} />
                    : <Spinner size={2}/>
                }

                <ReadingList/>

                {popular.payload !== undefined
                    ? <PhotoCardsContainer cards={[popular.payload[2], popular.payload[4]]}/>
                    : <Spinner size={2}/>
                }

            </div>
        </main>
    )
};
