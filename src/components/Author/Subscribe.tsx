import React, {useState} from 'react';

import Button from '../Button';

import '../../assets/styles/scss/subscribe.scss';

interface IProps {
    size:string,
    classes?: string
}

const Subscribe:React.FC<IProps> = (props) => {
    
    let [input, setInput] = useState<string>('');

    const inputHandler = (e:React.FormEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    }
    const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInput('');
    }

    return (
        <form onSubmit={submitHandler} className={"subscribe subscribe_size_" + props.size + " " + props.classes }>
            <div className={"subscribe__container subscribe__container_size_" + props.size}>
                <input type="email" className={"subscribe__email subscribe__email_size_" + props.size}
                    placeholder="Your Email" onChange={inputHandler} value={input}/>
                
                <Button classes={"btn_bg_pink subscribe__btn subscribe__btn_size_" + props.size}>
                    Subscribe
                </Button>
            </div>
        
        </form>
    )
    
}

export default Subscribe;