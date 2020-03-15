import React, { useState, useEffect } from "react";

import InfoCardContainer from '../components/CardComponents/InfoCardContainer';
import PhotoCardsContainer from "../components/CardComponents/PhotoCardsContainer";

import { IResponse } from '../Data';
import { kindaServerResponse } from '../Data';

export const Home = () => {

    let [data, setData] = useState<IResponse>({thematic: [], other: []});
    
    useEffect(() => {
        setData(kindaServerResponse);
    }, []);
    
    return (
        <>
            {
                data.thematic.map(el => {
                    return <InfoCardContainer {...el} key={el.type}/>
                })
            }

            {
                // place for Reading list
            }

            <PhotoCardsContainer cards={data.other}/>
             
        </>
    )
};