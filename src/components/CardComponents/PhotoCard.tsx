import React from 'react';

import { IPost } from '../../interfaces/cardInterfaces';

interface IProps {
    post: IPost
    isText: boolean 
} 

const PhotoCard = (props: IProps) => {
        
    return (
        <div className='photo-card'>
            <div className='photo-card__photo'>
                <img src={props.post.featuredImage} className='photo-card__photo' alt={props.post.title}/>
            </div>
            
            <p className='photo-card__description'> 
                By&nbsp;
                <span className='photo-card__author'>{props.post.author}</span>
                &nbsp;in&nbsp;
                <span className='photo-card__type'>{props.post.category}</span> 
            </p>

            <h3 className='photo-card__title'>{props.post.title}</h3>
            
            {
                props.isText ? 
                    <p className='photo-card__text' 
                        dangerouslySetInnerHTML={{ __html:props.post.content }}>
                    </p>
                : null
            }

        </div>
    )
}

export default PhotoCard