import React from 'react';

import { ICard } from '../../interfaces/cardInterfaces';

const PhotoCard = (props: ICard) => {
    
    const randomColor = () => Math.round(Math.random() * 255) ;
    console.log(randomColor())
    return (
        <div className='photo-card'>
            <div className='photo-card__photo' 
                style={ {background: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`} }>
            </div>
            
            <p className='photo-card__description'> 
                By&nbsp;
                <span className='photo-card__author'>{props.author}</span>
                &nbsp;in&nbsp;
                <span className='photo-card__type'>{props.type}</span> 
            </p>

            <h3 className='photo-card__title'>{props.title}</h3>
            
            <p className='photo-card__text'>{props.text}</p>
        </div>
    )
}

export default PhotoCard