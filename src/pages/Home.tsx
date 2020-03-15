import React from "react";
import {Hero} from "../components/Hero/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Home = () => {
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
        </main>
    )
};