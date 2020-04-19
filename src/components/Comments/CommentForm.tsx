import React from 'react';

export const CommentForm: React.FC = () => {
    return (
        <div className="comment-form">
            <h2 className="comment-form__title">
                Leave a Reply
            </h2>
            <textarea className="comment-form__input" rows={8} placeholder="Comment" />
            <input className="comment-form__input" type="text" placeholder="Name"/>
            <input className="comment-form__input" type="email" placeholder="Email"/>
            <div className="comment-form__agree">
                <input type="checkbox" id="comment-agree" />
                <label htmlFor="comment-agree">
                    I agree to the <a href="#" className="post-content__link">
                    Terms and Conditions</a> and <a href="#" className="post-content__link">Privacy Policy</a>
                </label>
            </div>
            <button type="submit" className="comment-form__submit">
                Post Comment
            </button>
        </div>
    )
};
