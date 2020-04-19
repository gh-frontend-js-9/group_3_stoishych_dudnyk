import React from 'react';
import { Link } from "react-router-dom";

import  { IPost } from '../../interfaces/cardInterfaces';

const BigInfoCard = (props:IPost) => {
    return (
            <div className='big-card'>
                <Link to="/post" className="post-link">
                    <p className='big-card__description'>By {props.author} in {props.category[0]} process</p>
                    <h3 className='big-card__title'>{props.title}</h3>
                    <p className='big-card__text'>{props.description}</p>
                </Link>
            </div>

    )
}

export default BigInfoCard;
