import React from 'react';
import {Author} from "../../interfaces/author";
import { setCurrentAuthor } from "../../actions/currentAuthor";
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

interface Props {
    title: string,
    description: string,
    author: Author,
    tags: string[]
}

export const PostHero: React.FC<Props> = ({title, description, author, tags}) => {
    const dispatch = useDispatch();

    return (
        <div className="container post-hero">
            <div className="post-hero-wrapper">
                <h1 className="hero__title post-hero__color">{title}</h1>
                <h3 className="hero__subtitle post-hero__color">{description}</h3>
                <p className="hero__author post-hero__description">
                    BY <Link to={`/author?id=${author._id}`} className="post-hero__author" 
                        onClick={() => dispatch(setCurrentAuthor(author))}>
                        {`${author.firstName} ${author.lastName}`}
                    </Link> IN <span className="post-hero__color">{tags}</span>
                </p>
            </div>
        </div>
    )
};
