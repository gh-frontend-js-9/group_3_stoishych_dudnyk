import React from 'react';
import { Link } from "react-router-dom";
import {Post} from "../../interfaces/docs";
import {useDispatch} from "react-redux";
import {setCurrentPost} from "../../actions/currentPost";

const SmallInfoCard = (props:Post) => {
    const dispatch = useDispatch();
    return (
            <div className='small-card' onClick={() => dispatch(setCurrentPost(props._id))}>
                <Link to="/post" className="post-link__black">
                    <p className='small-card__type'>{props.category[0]}</p>
                    <h3 className='small-card__title'>{props.title}</h3>
                </Link>
            </div>

    )
}

export default SmallInfoCard;
