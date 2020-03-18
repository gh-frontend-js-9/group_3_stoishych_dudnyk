import React from 'react';

import '../../assets/styles/scss/infoCards.scss';

import InfoCardList from './InfoCardList';
import { IPostsBlock } from '../../interfaces/cardInterfaces';

const InfoCardContainer = (props:IPostsBlock) => {
    return (
        <div className='info-container'>
            
            <div className='info-container__header'>
                <h2 className='info-container__type'>{props.title}</h2>
                <span className='info-container__link'>View all</span>
            </div>

            <InfoCardList {...props}/>
        </div>
    )
}

export default InfoCardContainer;