import React from 'react';

import BigInfoCard from './BigInfoCard'
import SmallInfoCard from './SmallInfoCard';

import {CategoryState, Docs} from "../../interfaces/docs";

const InfoCardList:React.FC<CategoryState> = ({payload}) => {
    return (
        <div className='info-container__cards-list'>

            <BigInfoCard {...payload[0]} />

            <div className='info-container__small-cards-container'>
                {(payload as Docs).map((el, index) => {
                    return index === 0
                        ? ''
                        : <SmallInfoCard {...el} key={el._id}/>
                })}
            </div>

        </div>
    )
}

export default InfoCardList;
