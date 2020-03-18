import React from 'react';

import { IPost } from '../../interfaces/cardInterfaces';

const PhotoCard = (props: IPost) => {
    
    const randomColor = () => Math.round(Math.random() * 255) ;
    
    const textStyle = {
        height: '2.2em',
        lineHeight: '1.1em',
        fontSize: '1em'
    }

    return (
        <div className='photo-card'>
            <div className='photo-card__photo'>
                <img src={props.featuredImage} className='photo-card__photo' alt={props.title}/>
            </div>
            
            <p className='photo-card__description'> 
                By&nbsp;
                <span className='photo-card__author'>{props.author}</span>
                &nbsp;in&nbsp;
                <span className='photo-card__type'>{props.category}</span> 
            </p>

            <h3 className='photo-card__title'>{props.title}</h3>
            
            <p className='photo-card__text' 
                style={textStyle}
                dangerouslySetInnerHTML={{ __html:props.content }}></p>
        </div>
    )
}

export default PhotoCard