import React, { useState } from 'react';

import {ReactComponent as SearchImg} from "../assets/images/search.svg"
import '../assets/styles/scss/search.scss';

interface IProps {
    classes?: string
}

const Search:React.FC<IProps> = (props) => {
    let [value, setValue] = useState<string>('');

    const search = ():void => {
        // look for post with this value
        // find(value);
        setValue('');
    }

    return (
        <div className={"search "+props.classes}>
            <input type="text" name="search" placeholder="Type something..." className="search__input"
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} value={value}/>
            <SearchImg className="search__icon" onClick={search}/>
        </div>
    )
}

export default Search;
