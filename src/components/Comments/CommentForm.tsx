import React, { ChangeEvent, useState } from 'react';
import { IComment } from './Comment';

interface Props {
    onSubmit: (comment: IComment) => void;
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const CommentForm: React.FC<Props> = ({ onSubmit }) => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleCheckboxChange = (event: React.FormEvent<HTMLInputElement>) => {
    setCheckbox(event.currentTarget.checked);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date();
    if (name && email && comment) {
      onSubmit({
        id: name + Date.now(),
        name,
        text: comment,
        created_at: `${months[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()} at ${
          date.getHours()}:${date.getMinutes()}`,
      });
    }
  };

  return (
    <form className="comment-form" onSubmit={submitForm} id="comment-form">
      <h2 className="comment-form__title">
                Leave a Reply
      </h2>
      <textarea
        className="comment-form__input"
        value={comment}
        onChange={handleCommentChange}
        rows={8}
        placeholder="Comment"
      />
      <input
        className="comment-form__input"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
      />
      <input
        className="comment-form__input"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <div className="comment-form__agree">
        <input type="checkbox" id="comment-agree" checked={checkbox} onChange={handleCheckboxChange} required />
        <label htmlFor="comment-agree">
                    I agree to the
          {' '}
          <a href="/" className="post-content__link">
                    Terms and Conditions
          </a>
          {' '}
and
          {' '}
          <a href="/" className="post-content__link">Privacy Policy</a>
        </label>
      </div>
      <button type="submit" className="comment-form__submit">
                Post Comment
      </button>
    </form>
  );
};
