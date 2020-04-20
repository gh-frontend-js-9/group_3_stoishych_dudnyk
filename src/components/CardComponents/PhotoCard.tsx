import React from 'react';

import {Post} from "../../interfaces/docs";
import {Link} from "react-router-dom";
import {getCurrentPostRequested, setCurrentPost} from "../../actions/currentPost";
import {useDispatch} from "react-redux";

interface IProps {
    post: Post
    isText: boolean
}


const PhotoCard: React.FC<IProps> = ({post, isText}) => {
    const openNewPost = () => {
        dispatch(setCurrentPost(post._id));
    };
    const dispatch = useDispatch();
    return (
        <Link to="/post" className="photo-card__link">
            <div className='photo-card' onClick={openNewPost}>

                <div className='photo-card__photo'>
                    <img src={post.featuredImage || 'https://picsum.photos/700'} className='photo-card__photo'
                         alt={post.title}/>
                </div>

                <p className='photo-card__description'>
                    By&nbsp;
                    <span className='photo-card__author'>{`${post.author.firstName} ${post.author.lastName}`}</span>
                    &nbsp;in&nbsp;
                    <span className='photo-card__type'>{post.category}</span>
                </p>

                <h3 className='photo-card__title'>{post.title}</h3>

                {isText ?
                    <p className='photo-card__text'>
                        {post.description}
                    </p>
                    : null}

            </div>
        </Link>
    )
}

export default PhotoCard
