import React from 'react';
import { Link } from "react-router-dom";
import { IPost } from '../../interfaces/cardInterfaces';

const SmallInfoCard = (props:IPost) => {
    return (
            <div className='small-card'>
                <Link to="/post" className="post-link__black">
                    <p className='small-card__type'>{props.category[0]}</p>
                    <h3 className='small-card__title'>{props.title}</h3>
                </Link>
            </div>

    )
}

export default SmallInfoCard;
