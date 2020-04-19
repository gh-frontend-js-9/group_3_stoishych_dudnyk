import React, {useEffect} from 'react';
import {PostHero} from "../components/PostHero/PostHero";
import {IconColumnContainer} from "../components/socialNetsInColumn/IconColumnContainer";
import {PostReviews} from "../components/PostMain/PostReviews/PostReviews";
import {PostMain} from "../components/PostMain/PostMain";

export const Post: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PostHero/>
            <main className="post">
                <div className="container">
                    <div className="post-wrapper">
                        <IconColumnContainer themeNumber='1' size='md' position='center'/>
                        <PostMain/>
                        <PostReviews/>
                    </div>

                </div>
            </main>
        </>
    )
};
