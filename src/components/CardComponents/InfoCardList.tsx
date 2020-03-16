import React from 'react';

import BigInfoCard from './BigInfoCard'
import SmallInfoCard from './SmallInfoCard';

import { ICardContainer } from '../../interfaces/cardInterfaces';

const InfoCardList = (props:ICardContainer) => {
    return (
        <div className='info-container__cards-list'>
            
            <BigInfoCard {...props.cards[0]} />

            <div className='info-container__small-cards-container'>
                {props.cards.map((el, index) => {
                    return index === 0 
                        ? ''
                        : <SmallInfoCard {...el}/>
                })}
            </div> 
        
        </div>
    )
}

export default InfoCardList;