import React from 'react';


import { ICard } from '../../interfaces/cardInterfaces';


const SmallInfoCard = (props:ICard) => {
    return (
        <div className='small-card'>
            <p className='small-card__type'>{props.type}</p>
            <h3 className='small-card__title'>{props.title}</h3>
        </div>
    )
}

export default SmallInfoCard;