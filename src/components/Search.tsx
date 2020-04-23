import React, { useState } from 'react';

import {ReactComponent as SearchImg} from "../assets/images/search.svg"
import '../assets/styles/scss/search.scss';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../App';

interface IProps {
    classes?: string,
    isUnderline: boolean
}

const Search:React.FC<IProps> = (props) => {
    let [value, setValue] = useState<string>('');
    let history = useHistory();
    let query = useQuery();

    const search = ():void => {
        if (value.length > 1) {
            history.push(`/author?id=${query.get("id")}&query=${value}`)
            setValue('');
        }
    }

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === 'Enter') {
           search();
        }
    }

    return (
        <div className={"search "+props.classes}>
            <div className={"search__input-container " + (props.isUnderline ? "search__input-container_underline" : "")}>
                <input type="text" name="search" placeholder="Type something..." className="search__input"
                    onChange={onChange} value={value} onKeyDown={onKeyDown}/>
            </div>
            <SearchImg className="search__icon" onClick={search}/>
        </div>
    )
}

export default Search;
