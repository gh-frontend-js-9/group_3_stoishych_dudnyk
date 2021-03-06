import React, { useState } from 'react';

import '../assets/styles/scss/pages/main.scss';
import '../assets/styles/scss/pages/author.scss';
import '../assets/styles/scss/calendar.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Calendar, { OnChangeDateCallback } from 'react-calendar';
import { useSelector } from 'react-redux';
import { ReadingCardsContainer } from '../components/ReadingList/ReadingCardsContainer';

import AuthorBlock from '../components/Author/AuthorBlock';
import Advertisement from '../components/Advertisement';
import IconContainer from '../components/socialNets/IconContainer';
import SmallCardsContainer from '../components/CardComponents/SmallCardsContainer';
import Subscribe from '../components/Author/Subscribe';
import Search from '../components/Search';
import News from '../components/Author/News';
import TagContainer from '../components/Tag/TagContainer';
import { DocsState, Post } from '../interfaces/docs';
import Spinner from '../components/Spinner';
import { useQuery } from '../App';

const Author: React.FC = () => {
  const query = useQuery();

  const queryId = query.get('id');
  const queryText = query.get('query') || '';

  const [date, setDate] = useState<Date>(new Date());

  const popular = useSelector((state: DocsState) => {
    const array: Post[] = state.popular.payload;
    if (array !== undefined) return state.popular.payload.slice(0, 3);
    return array;
  });

  const recent = useSelector((state: DocsState) => {
    const array: Post[] = state.essential.payload;
    if (array !== undefined) return array.slice(0, 4);
    return array;
  });

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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="main main_bg_light-gray">
      <section className="author-page main__container">

        <section className="section1">

          { !!popular && !!recent
            ? (
              <>

                { queryId !== 'all'
                  ? <AuthorBlock classes="section1__author-info" />
                  : null}

                { queryText
                  ? (
                    <p className="section1__searching-text">
Results for '
                        {`${queryText}`}
'
                      </p>
                  )
                  : null}

                <News classes="section1__news" isSpecificAuthor={queryId !== 'all'} searhingText={queryText} />


                <div className="section1__subscribe section1__subscribe_offset">
                  <p className="section1__subscribe-title">
                                Get free web design insights...
                  </p>
                  <p className="section1__subscribe-description">
                                In your inbox, every other week. And unsubscribe in a click, if you want.
                  </p>
                  <Subscribe size="lg" />
                </div>

              </>
            )

            : <Spinner size={3} />}

        </section>


        <section className="section2">

          <Search classes="section2__search" isUnderline />

          <SmallCardsContainer posts={popular} isPhoto classes="section2__sm-cards-container">
                        Popular Posts
          </SmallCardsContainer>

          <SmallCardsContainer posts={recent} isPhoto={false} classes="section2__sm-cards-container">
                        Recent Posts
          </SmallCardsContainer>

          <div className="section2__subscribe section2__subscribe_offset section2__subscribe_bg_white">
            <span className="section2__subscribe-title">Subscribe</span>
            <Subscribe size="sm" classes="subscribe" />
          </div>

          <article className="social-media section2__social-media">
            <span className="social-media__title">Social Media</span>
            <IconContainer themeNumber="2" size="md" classes="social-media__icon-container" />
          </article>

          <ReadingCardsContainer settings={sliderSettings} classes="section2__reading-list-container" />

          <Calendar value={date} onChange={setDate as OnChangeDateCallback} />

          <Advertisement classes="section2__advertisement" />

          <TagContainer numberOfTags={10} classes="section2__tag-container" />

        </section>


      </section>
    </main>
  );
};

export default Author;
