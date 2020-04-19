import React from 'react';

export const AuthorInfo: React.FC = () => {
    return (
        <div className="author-info">
            <div className="author-info__avatar" />
            <h3 className="author-info__name">TOMAS LAURINAVICIUS</h3>
            <p className="author-info__subtitle">
                Follow me <a href="https://twitter.com/">@JohnAMWill.</a>
            </p>
        </div>
    )
}
