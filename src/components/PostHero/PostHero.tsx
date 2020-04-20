import React from 'react';
import {Author} from "../../interfaces/author";

interface Props {
    title: string,
    description: string,
    author: Author,
    tags: string[]
}

export const PostHero: React.FC<Props> = ({title, description, author, tags}) => {
    return (
        <div className="container post-hero">
            <div className="post-hero-wrapper">
                <h1 className="hero__title post-hero__color">{title}</h1>
                <h3 className="hero__subtitle post-hero__color">{description}</h3>
                <p className="hero__author post-hero__author">
                    BY <span className="post-hero__color">{`${author.firstName} ${author.lastName}`}</span> IN <span
                    className="post-hero__color">{tags}</span>
                </p>
            </div>
        </div>
    )
};
