import React, { useState, useEffect } from 'react';

import { IPost } from '../../interfaces/cardInterfaces';
import SmallCard from './SmallCard';

import '../../assets/styles/scss/Cards/smallCardsContainer.scss';

interface IProps {
    posts: IPost[],
    isPhoto: boolean,
    classes?: string
}

const SmallCardsContainer:React.FC<IProps> = (props) => {

    return (
        <article className={"sm-cards-container " + props.classes}>
            
            <span className="sm-cards-container__title">{props.children}</span>

            <div className="sm-cards-container__card-list">
                {!!props.posts.length
                    ? props.posts.map( (el) => <SmallCard post={el} isPhoto={props.isPhoto} key={el._id}/>)
                    : null
                }
            </div>
        </article>
    )
}

export default SmallCardsContainer;