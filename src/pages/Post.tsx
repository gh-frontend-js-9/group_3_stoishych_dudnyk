import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostHero } from '../components/PostHero/PostHero';
import IconContainer from '../components/socialNets/IconContainer';
import { PostReviews } from '../components/PostMain/PostReviews/PostReviews';
import { PostMain } from '../components/PostMain/PostMain';
import { DocsState } from '../interfaces/docs';
import { getCurrentPostRequested } from '../actions/currentPost';
import Spinner from '../components/Spinner';

export let currentIdUrl: string;

export const Post: React.FC = () => {
  const dispatch = useDispatch();
  const currentPost = useSelector((state: DocsState) => state.currentPost);

  if (currentPost.id) {
    currentIdUrl = currentPost.id;
    localStorage.setItem('currentPost', JSON.stringify(currentPost.id));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPost.id]);

  useEffect(() => {
    dispatch(getCurrentPostRequested());
  }, [currentPost.id]);

  return (
    <>
      {currentPost.payload !== undefined
        ? (
          <>
            <PostHero
              description={currentPost.payload.description}
              author={currentPost.payload.author}
              title={currentPost.payload.title}
              tags={currentPost.payload.tags}
            />
            <main className="post">
              <div className="container">
                <div className="post-wrapper">
                  <IconContainer themeNumber="1" size="md" classes="post__icon-contaner" />
                  <PostMain
                    image={currentPost.payload.featuredImage}
                    content={currentPost.payload.content}
                    author={currentPost.payload.author}
                    />
                  <PostReviews
                    likes={currentPost.payload.likesCount}
                    views={currentPost.payload.viewsCount}
                    />
                </div>

              </div>
            </main>
          </>
        )

        : <div className="container post-hero"><Spinner size={3} /></div>}
    </>
  );
};
