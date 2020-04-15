import React from 'react';

import '../assets/styles/scss/button.scss';

interface IProps {
    classes:string
} 

const Button:React.FC<IProps> = (props) => {
    return (
        <button className={'btn '+props.classes}>{props.children}</button>
    )
}

export default Button;