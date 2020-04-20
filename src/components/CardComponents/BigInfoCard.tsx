import React from 'react';
import { Link } from "react-router-dom";

import {Post} from "../../interfaces/docs";
import {useDispatch} from "react-redux";
import {setCurrentPost} from "../../actions/currentPost";

const BigInfoCard = (props:Post) => {
    const dispatch = useDispatch();
    return (
            <div className='big-card' onClick={() => dispatch(setCurrentPost(props._id))}>
                <Link to="/post" className="post-link">
                    <p className='big-card__description'>
                        {`By ${props.author.firstName} 
                        ${props.author.lastName} in ${props.category[0]} process`}
                    </p>
                    <h3 className='big-card__title'>{props.title}</h3>
                    <p className='big-card__text'>{props.description}</p>
                </Link>
            </div>

    )
}

export default BigInfoCard;
