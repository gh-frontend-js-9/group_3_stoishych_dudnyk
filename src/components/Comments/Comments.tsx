import React, { useState } from 'react';
import { Comment, IComment } from './Comment';
import { CommentForm } from './CommentForm';

const commentsData = [
  {
    id: '1',
    name: 'Brian Jackson',
    created_at: 'December 14, 2017 at 5:13 pm',
    text: 'I think, you forgot to mention a very good one:\n'
            + 'Thrive architect from thrivethemes. That thing is pretty powerful.',
  },
  {
    id: '2',
    name: 'Wiliam Hilton',
    created_at: 'December 14, 2017 at 5:13 pm',
    text: 'I think, you forgot to mention a very good one:\n'
            + 'Thrive architect from thrivethemes. That thing is pretty powerful.',
  },
];

export const Comments: React.FC = () => {
  const [comments, setComments] = useState<IComment[]>(commentsData);

  const addNewComment = (comment: IComment) => {
    setComments((prevState) => [...prevState, comment]);
  };

  return (
    <section className="comments">
      <div className="comments-header">
        <h2 className="comments-header__title">
                    Comments
        </h2>
        <a href="#comment-form">
          <button className="comments-header__btn">
                        Leave a Comment
          </button>
        </a>
      </div>
      <p className="comments-policy">
        <b>Comment policy</b>
: We love comments and appreciate the time that readers spend to share ideas and give feedback.
                However, all comments are manually moderated and those deemed to be spam or solely promotional will be deleted.
      </p>
      <div className="comments-container">
        {comments.map((obj: IComment) => (
          <Comment key={obj.id} {...obj} />
        ))}
      </div>
      <hr className="comments-hr" />
      <CommentForm onSubmit={addNewComment} />
    </section>
  );
};
