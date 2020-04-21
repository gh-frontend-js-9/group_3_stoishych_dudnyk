import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../assets/styles/scss/spinner.scss';

interface IProps {
    size: number;
}

const Spinner = (props:IProps) => {
    return (
        <div className='spinner spinner_mg_10' style={{fontSize: `${props.size}em`}}>
            <FontAwesomeIcon icon='sync-alt' spin/> 
        </div>
    )
} 

export default Spinner;