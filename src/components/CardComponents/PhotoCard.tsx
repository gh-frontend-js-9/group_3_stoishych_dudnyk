import React from 'react';

import {Post} from "../../interfaces/docs";
import {Link} from "react-router-dom";
import { setCurrentPost} from "../../actions/currentPost";
import { setCurrentAuthor } from "../../actions/currentAuthor";

import {useDispatch} from "react-redux";

interface IProps {
    post: Post
    isText: boolean
}


const PhotoCard: React.FC<IProps> = ({post, isText}) => {
    const dispatch = useDispatch();

    const openNewPost = () => {
        dispatch(setCurrentPost(post._id));
    };
    
    const openAuthorPage = () => {
        dispatch(setCurrentAuthor(post.author));
    };
    
    
    return (
            <div className='photo-card' onClick={openNewPost}>
                
                <Link to="/post" className="photo-card__link">
                
                    <div className='photo-card__photo'>
                        <img src={post.featuredImage || `https://picsum.photos/700?${new Date().getMilliseconds()}` } className='photo-card__photo'
                            alt={post.title}/>
                    </div>
                
                </Link>

                <p className='photo-card__description'>
                    By&nbsp;
                    
                    <Link to={`/author?id=${post.author._id}`} onClick={openAuthorPage} className="photo-card__link"> 
                        <span className='photo-card__author'>
                            {`${post.author.firstName} ${post.author.lastName}`}
                        </span>
                    </Link>

                    &nbsp;in&nbsp;
                    <span className='photo-card__type'>{post.category}</span>
                </p>

                <Link to="/post" className="photo-card__link">
                
                    <h3 className='photo-card__title'>{post.title}</h3>

                    { isText ?   
                        <p className='photo-card__text'>
                            {post.description}
                        </p>: null}
                </Link>

            </div>
    )
}

export default PhotoCard
