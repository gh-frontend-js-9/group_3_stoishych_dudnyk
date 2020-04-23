import React from 'react';
import { useSelector } from 'react-redux';
import { AuthorInfo } from '../AuthorInfo';
import { Comments } from '../Comments/Comments';
import { Author } from '../../interfaces/author';
import { DocsState } from '../../interfaces/docs';
import PhotoCardsContainer from '../CardComponents/PhotoCardsContainer';
import Spinner from '../Spinner';

interface Props {
    image: string;
    content: string;
    author: Author;
}

const getRandomNumber = () => Math.floor(Math.random() * 4);


export const PostMain: React.FC<Props> = ({ image, content, author }) => {
  function createMarkup() {
    return { __html: content };
  }
  const freelancePosts = useSelector((state: DocsState) => state.freelance.payload);
  const essentialPosts = useSelector((state: DocsState) => state.essential.payload);

  return (
    <section className="post-main">
      <img src={image} className="post-image" alt="Post img" />
      <div dangerouslySetInnerHTML={createMarkup()} />
      <AuthorInfo
        description={author.description}
        firstName={author.firstName}
        lastName={author.lastName}
      />
      <h2 className="post-content__subtitle">You might also like...</h2>
      {freelancePosts && essentialPosts ? (
        <PhotoCardsContainer cards={[freelancePosts[getRandomNumber()],
          essentialPosts[getRandomNumber()]]}
        />
      ) : <Spinner size={3} />}
      <Comments />
    </section>
  );
};
