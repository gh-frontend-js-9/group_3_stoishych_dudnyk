import React from 'react';


import { IPost } from '../../interfaces/cardInterfaces';


const SmallInfoCard = (props:IPost) => {
    return (
        <div className='small-card'>
            <p className='small-card__type'>{props.category[0]}</p>
            <h3 className='small-card__title'>{props.title}</h3>
        </div>
    )
}

export default SmallInfoCard;