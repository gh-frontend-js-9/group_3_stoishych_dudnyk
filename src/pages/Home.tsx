import React, { useState, useEffect } from "react";
import requestApi from '../requestAPI';

import Spinner from '../components/Spinner';
import '../assets/styles/scss/pages/main.scss';

import {Hero} from "../components/Hero/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import InfoCardContainer from '../components/CardComponents/InfoCardContainer';
import PhotoCardsContainer from "../components/CardComponents/PhotoCardsContainer";


import { IPostsBlock, IPost } from '../interfaces/cardInterfaces';
import {ReadingList} from "../components/ReadingList/ReadingList";

import {heroData} from "../components/Hero/HeroData";

export const Home = () => {
      
    let [popular, setPopular] = useState<IPostsBlock|any>({});
    let [essential, setEssential] = useState<IPostsBlock|any>({});
    let [freelance, setFreelance] = useState<IPostsBlock|any>({});
    
    useEffect(() => {
        requestApi.getPostsList('?category=popular&page=1&limit=5&fields=title,category,author,featuredImage,description')
        .then((resp) => {
            resp.data.docs = resp.data.docs.map(( el:IPost, index:number) => ({...el, author: 'man' + index}))
            setPopular({
                ...resp.data,
                title: "Popular"
            });
        });
    }, []);

    useEffect(() => {
        requestApi.getPostsList('?category=essential&page=1&limit=5&fields=title,category,author,description')
        .then((resp) => {
            resp.data.docs = resp.data.docs.map(( el:IPost, index:number) => ({...el, author: 'man' + index}))
            setEssential({
                ...resp.data,
                title: "Essential"
            });
        });
    }, []);
    
    useEffect(() => {
        requestApi.getPostsList('?category=freelance&page=1&limit=5&fields=title,category,author,description')
        .then((resp) => {
            resp.data.docs = resp.data.docs.map(( el:IPost, index:number) => ({...el, author: 'man' + index}))
            
            setFreelance({
                ...resp.data, 
                title: "Freelance"
            });
        });
    }, []);
    
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
                {heroData.map((obj, index) => <Hero author={obj.author} title={obj.title} subtitle={obj.subtitle} key={index}/>)}
            </Slider>

            <div className='main__container'>

 
            { Object.keys(popular).length !== 0 
                ? <InfoCardContainer {...popular} key={popular._id}/>
                : <Spinner size={2}/>
            }

            { Object.keys(essential).length !== 0 
                ? <InfoCardContainer {...essential} key={essential._id}/>
                : <Spinner size={2}/>
            }

            { Object.keys(freelance).length !== 0 
                ? <InfoCardContainer {...freelance} key={freelance._id}/>
                : <Spinner size={2}/>
            }

            <ReadingList/>
            
            { Object.keys(popular).length !== 0
                ? <PhotoCardsContainer cards={[popular.docs[2], popular.docs[4]]}/>
                : <Spinner size={2}/>
            }

            </div>

        </main>
    )
};