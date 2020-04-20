import React, { useState } from 'react';

import '../assets/styles/scss/pages/main.scss';
import '../assets/styles/scss/pages/author.scss';
import '../assets/styles/scss/calendar.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReadingCardsContainer } from '../components/ReadingList/ReadingCardsContainer';

import Advertisement from '../components/Advertisement';
import IconContainer from '../components/socialNets/IconContainer';
import SmallCardsContainer from '../components/CardComponents/SmallCardsContainer';
import Subscribe from '../components/Author/Subscribe';
import Search from '../components/Search';
import News from '../components/Author/News';
import Calendar, { OnChangeDateCallback } from 'react-calendar';
import TagContainer from '../components/Tag/TagContainer';
import { DocsState } from "../interfaces/docs";
import { useSelector } from "react-redux";

const Author:React.FC = () => {

    let [date, setDate] = useState<Date>(new Date());
    /*let [popular, setPopular] = useState<Post[]>([]);
    let [recent, setRecent] = useState<Post[]>([]);*/

    const popular = useSelector((state:DocsState) => state.popular.payload);
    const recent = useSelector((state:DocsState) => state.essential.payload);

    let myRef = React.createRef<HTMLElement>();

    /*useEffect(() => {
        requestAPI.getPostsList("?category=popular&page=1&limit=3&fields=title,author,tags,featuredImage,_id")
        .then(resp => {
            setPopular(resp.data.docs);
        })
    }, []);

    useEffect(() => {
        //because we do not have a category for recent posts and last posts without a catagory are the same as popular
        //I decided to take essentials posts
        requestAPI.getPostsList("?category=essentials&limit=4&fields=title,author,tags,featuredImage,_id")
        .then(resp => {
            setRecent(resp.data.docs);
        })
    }, [])*/

    const sliderSettings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <main className="main main_bg_light-gray">
            <section className='author-page main__container'>

                <section className="section1">

                    <News classes="author-page__news" />

                    <div className="author-page__subscribe author-page__subscribe_offset">
                        <p className="author-page__subscribe-title author-page__subscribe-title_size_lg">
                            Get free web design insights...
                        </p>
                        <p className="author-page__subscribe-description">
                            In your inbox, every other week. And unsubscribe in a click, if you want.
                        </p>
                        <Subscribe size="lg" />
                    </div>

                </section>


                <section className="section2" ref={myRef}>

                    <Search classes="author-page__search" />

                    <SmallCardsContainer posts={popular} isPhoto={true} classes="author-page__sm-cards-container">
                        Popular Posts
                    </SmallCardsContainer >

                    <SmallCardsContainer posts={recent} isPhoto={false} classes="author-page__sm-cards-container">
                        Recent Posts
                    </SmallCardsContainer>

                    <div className="author-page__subscribe author-page__subscribe_bottom-offset author-page__subscribe_bg_white">
                        <span className="author-page__subscribe-title author-page__subscribe-title_size_sm">Subscribe</span>
                        <Subscribe size="sm" classes="subscribe"/>
                    </div>

                    <article className="social-media author-page__social-media">
                        <span className="social-media__title">Social Media</span>
                        <IconContainer themeNumber='2' size='md' position='around' />
                    </article>

                    <ReadingCardsContainer settings={sliderSettings} classes="author-page__reading-list-container"/>

                    <Calendar value={date} onChange={setDate as OnChangeDateCallback}/>

                    <Advertisement classes="author-page__advertisement"/>

                    <TagContainer numberOfTags={10} classes="author-page__tag-container"/>

                </section>


            </section>
        </main>
    )
}

export default Author;
