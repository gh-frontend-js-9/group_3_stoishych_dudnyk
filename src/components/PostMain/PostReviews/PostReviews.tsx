import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PostReviews: React.FC = () => {
    return (
        <section className="post-reviews">
            <FontAwesomeIcon icon='heart' className='post-reviews__icon' size="lg"/>
            <h2 className="post-reviews__count">
                12K
            </h2>
            <FontAwesomeIcon icon='eye' className='post-reviews__icon' size="lg"/>
            <h2 className="post-reviews__count">
                27K
            </h2>
        </section>
    )
};
