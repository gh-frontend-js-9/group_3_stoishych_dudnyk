import React from 'react';

import SmallCard from './SmallCard';

import '../../assets/styles/scss/Cards/smallCardsContainer.scss';
import {Post} from "../../interfaces/docs";

interface IProps {
    posts: Post[],
    isPhoto: boolean,
    classes?: string
}

const SmallCardsContainer:React.FC<IProps> = (props) => {
    console.log(props.posts);
    return (
        <article className={"sm-cards-container " + props.classes}>

            <span className="sm-cards-container__title">{props.children}</span>

            <div className="sm-cards-container__card-list">
                {props.posts !== undefined
                    ? props.posts.map( (el) => <SmallCard post={el} isPhoto={props.isPhoto} key={el._id}/>)
                    : null
                }
            </div>
        </article>
    )
}

export default SmallCardsContainer;
