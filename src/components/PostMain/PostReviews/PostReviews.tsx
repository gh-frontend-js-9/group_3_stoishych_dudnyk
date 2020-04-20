import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    likes: number,
    views: number
}
export const PostReviews: React.FC<Props> = ({likes, views}) => {
    return (
        <section className="post-reviews">
            <FontAwesomeIcon icon='heart' className='post-reviews__icon' size="lg"/>
            <h2 className="post-reviews__count">
                {likes}
            </h2>
            <FontAwesomeIcon icon='eye' className='post-reviews__icon' size="lg"/>
            <h2 className="post-reviews__count">
                {views}
            </h2>
        </section>
    )
};
