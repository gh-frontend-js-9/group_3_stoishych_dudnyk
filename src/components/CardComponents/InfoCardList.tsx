import React from 'react';

import BigInfoCard from './BigInfoCard'
import SmallInfoCard from './SmallInfoCard';

import { IPostsBlock, IPost } from '../../interfaces/cardInterfaces';

const InfoCardList = (props:IPostsBlock) => {
    return (
        <div className='info-container__cards-list'>
            
            <BigInfoCard {...props.docs[0]} />

            <div className='info-container__small-cards-container'>
                {props.docs.map((el, index) => {
                    return index === 0 
                        ? ''
                        : <SmallInfoCard {...el} key={el._id}/>
                })}
            </div> 
        
        </div>
    )
}

export default InfoCardList;