import React from 'react';

import '../../assets/styles/scss/Cards/infoCards.scss';

import InfoCardList from './InfoCardList';
import { CategoryState } from "../../interfaces/docs";

const InfoCardContainer:React.FC<CategoryState> = ({payload}) => {
    return (
        <div className='info-container'>

            <div className='info-container__header'>
                <h2 className='info-container__type'>{payload[0].category[0]}</h2>
                <span className='info-container__link'>View all</span>
            </div>

            <InfoCardList payload={payload}/>
        </div>
    )
}

export default InfoCardContainer;
