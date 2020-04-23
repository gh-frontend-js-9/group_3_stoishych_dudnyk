import React from 'react';

import '../../assets/styles/scss/tag.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
    title: string;
    isActive: boolean;
    remove: (tag: string) => void;
    choose: (tag: string) => void;
}


const Tag: React.FC<IProps> = (props) => (
  <div className={`tag ${props.isActive ? 'tag_active' : ''}`} onClick={() => props.choose(props.title)}>
    <span className="tag__title">{props.title}</span>
    <FontAwesomeIcon icon="times" className="tag__close-icon" onClick={() => props.remove(props.title)} />
  </div>
);

export default Tag;
