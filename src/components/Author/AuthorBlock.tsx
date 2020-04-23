import React, { useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import IconContainer from '../socialNets/IconContainer';
import { DocsState } from '../../interfaces/docs';

interface IProps {
    classes?: string;
}

const AuthorBlock: React.FC<IProps> = (props) => {
  const author = useSelector((state: DocsState) => state.currentAuthor);
  const img = useRef<HTMLImageElement>(null);
  if (author.payload) {
    localStorage.setItem('currentAuthor', JSON.stringify(author.payload));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [author.payload]);


  useEffect(() => {
    if (img.current !== undefined && img.current !== null) {
            img.current!.src = author.payload?.imgUrl || `https://loremflickr.com/320/240/man,woman?${new Date()}`;
    }
  }, [author.payload]);

  return (
    author.payload !== undefined
      ? (
        <div className={`author-info ${props.classes}`}>

          <img
            src=""
            ref={img}
            alt="author"
            className="author-info__avatar"
          />

          <span className="author-info__name">
            {`${author.payload.firstName} ${author.payload.lastName}`}
          </span>

          <p className="author-info__description">{author.payload.description}</p>
          <IconContainer themeNumber="1" classes="author-info__icon-container" size="sm" />

        </div>
      )
      : null
  );
};

export default AuthorBlock;
