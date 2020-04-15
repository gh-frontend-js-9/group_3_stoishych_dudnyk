import React, { useEffect, useState } from 'react';
 
import '../assets/styles/scss/pages/main.scss';
import '../assets/styles/scss/pages/author.scss';
import '../assets/styles/scss/calendar.scss'

import requestAPI from '../requestAPI';

import { IPost } from '../interfaces/cardInterfaces';


import Advertisement from '../components/Advertisement';
import IconContainer from '../components/socialNets/IconContainer';
import SmallCardsContainer from '../components/CardComponents/SmallCardsContainer';
import Subscribe from '../components/Author/Subscribe';
import Search from '../components/Search';
import News from '../components/Author/News';
import Calendar, { OnChangeDateCallback } from 'react-calendar';
import TagContainer from '../components/Tag/TagContainer';

const Author:React.FC = () => {

    let [date, setDate] = useState<Date>(new Date());
    let [popular, setPopular] = useState<IPost[]>([]);
    let [recent, setRecent] = useState<IPost[]>([]);

    let myRef = React.createRef<HTMLElement>();

    useEffect(() => {
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
    }, [])



    return (
        <main className="main main_bg_light-gray">
            <section className='author-page main__container'>
                <section className="section1">

                    <News />

                    <div className="author-page__subscribe"> 
                        <p className="author-page__subscribe-title author-page__subscribe-title_size_lg">Get free web design insights...</p>
                        <p className="author-page__subscribe-description">In your inbox, every other week. And unsubscribe in a click, if you want.</p>
                        <Subscribe size="lg" />
                    </div>

                </section>


                <section className="section2" ref={myRef}>
                    
                    <Search />
                
                    <SmallCardsContainer posts={popular} isPhoto={true}>Popular Posts</SmallCardsContainer>

                    <SmallCardsContainer posts={recent} isPhoto={false}>Recent Posts</SmallCardsContainer>

                    <article className="social-media">
                        <span className="social-media__title">Social Media</span>
                        <IconContainer themeNumber='2' size='md' position='around' />
                    </article>


                    <div className="author-page__subscribe author-page__subscribe_bg_white"> 
                        <span className="author-page__subscribe-title author-page__subscribe-title_size_sm">Subscribe</span>
                        <Subscribe size="sm" />   
                    </div>

                    <Calendar value={date} onChange={setDate as OnChangeDateCallback}/>

                    <Advertisement classes="author-page__advertisement"/>

                    <TagContainer numberOfTags={10} classes="author-page__tag-container"/>
                    
                </section>
            </section>
            

        </main>
    )
}

export default Author;