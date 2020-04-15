import React from 'react';
import { IPost } from '../../interfaces/cardInterfaces';

import '../../assets/styles/scss/Cards/smallCard.scss';

interface IProps {
    post: IPost,
    isPhoto:boolean
}  

const SmallCard:React.FC<IProps> = (props) => {
  
    return (
        <div className={"sm-card " +(props.isPhoto ? "sm-card_col_2" : "") }  >
            { props.isPhoto 
                ? <img src={props.post.featuredImage || 'https://picsum.photos/80'} alt={props.post.title} className="sm-card__image"/>
                : null 
            }
            <div>
                <p className="sm-card__tags">{props.post.tags![0] || 'Other stuff'}</p>
                <p className="sm-card__title">{props.post.title}</p>
            </div>
        </div>
    )
}

export default SmallCard;