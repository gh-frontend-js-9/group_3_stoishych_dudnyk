import React from 'react';

import  { ICard } from '../../interfaces/cardInterfaces';

const BigInfoCard = (props:ICard) => {
    return (
        <div className='big-card'>
            <p className='big-card__description'>By {props.author} in {props.type} process</p>
            <h3 className='big-card__title'>{props.title}</h3>
            <p  className='big-card__text'>{props.text}</p>
        </div>
    )
}

export default BigInfoCard;