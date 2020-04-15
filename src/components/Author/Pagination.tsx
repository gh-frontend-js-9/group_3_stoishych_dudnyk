import React from 'react';

import '../../assets/styles/scss/pagination.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
    pages: number,
    current: number,
    changeCurrentPage: (arg0:number) => void;
}


const Pagination:React.FC<IProps> = (props) => {
    let pageArray: number[] = [];
    
    for (let i=1; i <= props.pages; i++) pageArray.push(i);
    
    const nextPage = () => {
        if (props.current !== props.pages)
            props.changeCurrentPage(props.current+1);
    }

    const prevPage = () => {
        if (props.current !== 1)
            props.changeCurrentPage(props.current-1);
    }

    return (
        <ul className="pagination">
            <li onClick={prevPage} className="pagination__number">
                <FontAwesomeIcon icon="chevron-left" />
            </li>


            {pageArray.map(el => {
                
                // select only the current, previous, next, first and last pages
                if (el === props.current ||  el === (props.current-1) || el === (props.current+1) ||
                    el === 1 || el === props.pages) {
                    return (
                        <li onClick={() => props.changeCurrentPage(el)} key={el}
                            className={"pagination__number " + (props.current === el ? "pagination__number_active" : "")}>
                            {el}
                        </li>
                    )
                // insert ...  if too many pages in range from 1 to current-1
                } else if (el === (props.current - 2) && el !== 1) {
                    return (
                        <li className="pagination__dots" key={el} onClick={() => props.changeCurrentPage(props.current-2)}>
                            <FontAwesomeIcon icon='ellipsis-h'/>
                        </li>
                    )
                // insert ...  if too many pages in range from current+1 to last
                } else if ( el === (props.current + 2) && el !== props.pages)  {
                    return (
                        <li className="pagination__dots" key={el} onClick={() => props.changeCurrentPage(props.current+2)}>
                            <FontAwesomeIcon icon='ellipsis-h'/>
                        </li>   
                    )
                } else return ""
            })}

            <li onClick={nextPage} className="pagination__number">
                <FontAwesomeIcon icon="chevron-right" />
            </li>
        </ul>
    )
} 

export default Pagination;