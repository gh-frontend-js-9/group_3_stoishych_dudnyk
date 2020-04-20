import React from 'react';

interface Props {
    firstName: string,
    lastName: string,
    description: string
}
export const AuthorInfo: React.FC<Props> = ({firstName,lastName, description}) => {
    return (
        <div className="author-info">
            <div className="author-info__avatar" />
            <h3 className="author-info__name">{`${firstName} ${lastName}`}</h3>
            <p className="author-info__subtitle">
                {description}
            </p>
        </div>
    )
}
