import React from 'react';

export interface IComment {
    id: string;
    name: string;
    created_at: string;
    text: string;
}
export const Comment: React.FC<IComment> = ({ name, created_at, text }) => (
  <div className="comment">
    <div className="comment__avatar">
      <div className="comment__avatar" />
    </div>
    <div className="comment-content">
      <div className="comment-header">
        <div className="comment-header__item">
          <h3 className="comment-header__name">{name}</h3>
          <p className="comment-header__date">{created_at}</p>
        </div>
        <button className="comment-header__btn">Reply</button>
      </div>
      <p className="comment-content__text">{text}</p>
    </div>
  </div>
);
