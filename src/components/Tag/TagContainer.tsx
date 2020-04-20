import React, { useState, useEffect } from 'react';
import Tag from './Tag';

import requestAPI from '../../services/requestAPI';

interface IProps {
    numberOfTags: number,
    classes:string
}

const TagContainer:React.FC<IProps> = (props) => {
    let [tags, setTags] = useState<string[]>([]);
    let [activeTag, setActiveTag] = useState<string>('');

    useEffect(() => {
        requestAPI.getTags(10)
        .then(resp => {
            setTags(resp.data);
        });
    }, []);

    const removeTag = (tag:string):void => {
        setTags([...tags.filter(el => el !== tag)])
    }

    return (
        <div className={props.classes}>
            {
                tags.map((tag, index) => (
                    <Tag title={tag} remove={removeTag} choose={setActiveTag} isActive={tag === activeTag} key={index}/>
                ))
            }
        </div>
    )
}

export default TagContainer;
