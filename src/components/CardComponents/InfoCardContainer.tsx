import React from 'react';

import '../../assets/styles/scss/infoCards.scss';

import InfoCardList from './InfoCardList';
import { ICardContainer } from '../../interfaces/cardInterfaces';

const InfoCardContainer = (props:ICardContainer) => {
    return (
        <div className='info-container'>
            
            <div className='info-container__header'>
                <h2 className='info-container__type'>{props.type}</h2>
                <span className='info-container__link'>View all</span>
            </div>

            <InfoCardList {...props}/>
        </div>
    )
}

export default InfoCardContainer;