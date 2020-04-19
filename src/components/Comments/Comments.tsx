import React from 'react';
import { IComment } from "./Comment";
import { Comment } from "./Comment";
import {CommentForm} from "./CommentForm";

const commentsData = [
    {
        id: 1,
        name: 'Brian Jackson',
        created_at: 'December 14, 2017 at 5:13 pm',
        text: 'I think, you forgot to mention a very good one:\n' +
            'Thrive architect from thrivethemes. That thing is pretty powerful.',
    },
    {
        id: 2,
        name: 'Wiliam Hilton',
        created_at: 'December 14, 2017 at 5:13 pm',
        text: 'I think, you forgot to mention a very good one:\n' +
            'Thrive architect from thrivethemes. That thing is pretty powerful.',
    }
];

export const Comments: React.FC = () => {
    return (
        <section className="comments">
            <div className="comments-header">
                <h2 className="comments-header__title">
                    Comments
                </h2>
                <button className="comments-header__btn">
                    Leave a Comment
                </button>
            </div>
            <p className="comments-policy">
                <b>Comment policy</b>: We love comments and appreciate the time that readers spend to share ideas and give feedback.
                However, all comments are manually moderated and those deemed to be spam or solely promotional will be deleted.
            </p>
            <div className="comments-container">
                {commentsData.map((obj:IComment) =>
                    <Comment name={obj.name} key={obj.id} text={obj.text} created_at={obj.created_at}
                />)}
            </div>
            <hr className="comments-hr" />
            <CommentForm />
        </section>
    )
}
