import React from 'react';

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ReactComponent as SearchImg} from "../assets/images/search.svg"
import '../assets/styles/scss/search.scss';

const Search = () => {
    return (
        <div className="search">
            <input type="text" name="search" placeholder="Type something..." className="search__input"/>
            <SearchImg className="search__icon"/>
        </div>
    )
}

export default Search;