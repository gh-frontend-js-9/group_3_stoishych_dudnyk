import React from 'react';

import '../assets/styles/scss/advertisement.scss';

interface IProps {
    classes?:string

}

const Advertisement:React.FC<IProps> = (props) => {
    const addLink = 'https://picsum.photos/400';
    
    return (
        <a href={addLink} className={"advertisement " + props.classes} >
            <img src={addLink} alt="advertisement" className="advertisement__img"/>
        </a>
        
    )
}

export default Advertisement;