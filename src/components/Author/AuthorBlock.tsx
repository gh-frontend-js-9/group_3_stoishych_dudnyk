import React, {useEffect} from 'react';

import IconContainer from '../socialNets/IconContainer';
import { Author } from '../../interfaces/author';
import { useSelector, useDispatch } from 'react-redux';
import {DocsState} from "../../interfaces/docs";
import Spinner from '../Spinner';

interface IProps {
    author: Author,
    classes?: string
}

const AuthorBlock:React.FC<IProps> = (props) => {
    const dispatch = useDispatch();
    const currentAuthor = useSelector((state: DocsState) => state.currentAuthor);

    const author =  useSelector((state: DocsState) => state.currentAuthor);
    
    if (author.payload) {
        localStorage.setItem('currentAuthor', JSON.stringify(author.payload));    
    }

    let {classes} = props;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentAuthor.payload]);

    let link = author.payload!.imgUrl || `https://loremflickr.com/320/240/man,woman?${new Date()}`
    
    
    return (
        author.payload !== undefined 
        ?
            <div className={"author-info " + classes}>
            
                <img src={link} 
                    alt="author" className="author-info__avatar"/>
                
                <span className="author-info__name">
                    {`${author.payload.firstName} ${author.payload.lastName}`}
                </span>

                <p className="author-info__description">{author.payload.description}</p>
                <IconContainer themeNumber="1" position="center" size="sm"/>
            
            </div>
        : <Spinner size={3}/>
    )
}

export default AuthorBlock;