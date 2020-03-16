import React from 'react';

import '../../assets/styles/scss/photoCards.scss';


import PhotoCard from './PhotoCard';
import  { ICard } from '../../interfaces/cardInterfaces';

interface IProps {
    cards: ICard[]
}

const PhotoCardsContainer = (props: IProps) => {
    return (
        <div className='photo-card-container'>
            {
                props.cards.map(el => {
                    return <PhotoCard {...el}/>
                })
            }
        </div>
    )
}

export default PhotoCardsContainer;