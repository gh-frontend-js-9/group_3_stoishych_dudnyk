import React from 'react';

interface IProps {
    classes:string

}

const Advertisement:React.FC<IProps> = (props) => {
    const addLink = 'https://picsum.photos/400';
    
    return (
        <img src={addLink} alt="advertisement" className={props.classes}/>
    )
}

export default Advertisement;