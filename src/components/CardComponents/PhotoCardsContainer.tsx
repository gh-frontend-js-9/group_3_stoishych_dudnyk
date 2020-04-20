import React from 'react';

import '../../assets/styles/scss/Cards/photoCards.scss';

import PhotoCard from './PhotoCard';
import {Post} from "../../interfaces/docs";

interface IProps {
    cards: Post[]
}

const PhotoCardsContainer = (props: IProps) => {
    return (
        <div className='photo-card-container'>
            {
                props.cards.map(el => {
                    return <PhotoCard key={el._id} post={el} isText={true}/>
                })
            }
        </div>
    )
}

export default PhotoCardsContainer;
