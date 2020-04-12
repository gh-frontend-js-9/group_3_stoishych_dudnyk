import React from 'react';

import '../../assets/styles/scss/Cards/photoCards.scss';

import PhotoCard from './PhotoCard';
import  { IPost } from '../../interfaces/cardInterfaces';

interface IProps {
    cards: IPost[]
}

const PhotoCardsContainer = (props: IProps) => {
    return (
        <div className='photo-card-container'>
            {
                props.cards.map(el => {
                    return <PhotoCard {...el} key={el._id}/>
                })
            }
        </div>
    )
}

export default PhotoCardsContainer;