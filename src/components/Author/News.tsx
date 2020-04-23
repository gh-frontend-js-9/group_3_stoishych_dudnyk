import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { DocsState, Docs, Post } from '../../interfaces/docs';
import PhotoCard from '../CardComponents/PhotoCard';
import Pagination from './Pagination';

import '../../assets/styles/scss/Cards/photoCards.scss';

import Spinner from '../Spinner';

interface IProps {
    classes?: string;
    isSpecificAuthor: boolean;
    searhingText: string;
}

const News: React.FC<IProps> = (props) => {
  const POST_PER_PAGE = 3;

  const [posts, setPosts] = useState<Post[]>([]);
  const [pages, setPages] = useState<number>(1);
  const [current, setCurrent] = useState<number>(1);
  const [isloading, setIsLoading] = useState<boolean>(true);

  const essential = useSelector((state: DocsState) => state.essential);
  const popular = useSelector((state: DocsState) => state.popular);
  const freelance = useSelector((state: DocsState) => state.freelance);
  const author = useSelector((state: DocsState) => state.currentAuthor);

  useEffect(() => {
    setIsLoading(true);
    let array: Docs = [];

    if (essential.payload !== undefined && freelance.payload !== undefined
            && popular.payload !== undefined) {
      // if no author is selected, take different posts
      array = [...essential.payload, ...freelance.payload, ...popular.payload];

      // if author is selected take preloaded post from the store
      // because we can't pick up posts by author on the server
      if (author.payload !== undefined && props.isSpecificAuthor) {
        array = array.filter((el) => el.author._id === author.payload?._id);
      }

      // take posts that have searching text
      if (props.searhingText !== null) {
        array = array.filter((el) => {
          const item = props!.searhingText.toLocaleLowerCase();

          return el.title.toLocaleLowerCase().includes(item)
                    || el.category.join(' ').toLocaleLowerCase().includes(item)
                    || el.author.firstName.toLocaleLowerCase().includes(item)
                    || el.author.lastName.toLocaleLowerCase().includes(item);
        });
      }
      setPosts(array.slice((current - 1) * POST_PER_PAGE, current * POST_PER_PAGE));
      setPages(Math.ceil(array.length / 3));
      setIsLoading(false);
    }
  }, [essential.payload, popular.payload, freelance.payload, author.payload,
    current, props.isSpecificAuthor, props.searhingText]);

  useEffect(() => {
    // reset page if new author or another event occur
    setCurrent(1);
  }, [author.payload, props.isSpecificAuthor]);


  return !isloading
    ? posts.length
      ? (
        <>
          <ul className={props.classes}>
            { posts.map((post) => <PhotoCard post={post} isText={false} key={post._id} />) }
          </ul>

          { pages > 1
            ? <Pagination changeCurrentPage={setCurrent} pages={pages} current={current} />
            : null}

        </>
      ) : <p className="section1__error">No posts found in the store</p>

    : <Spinner size={3} />;
};

export default News;
