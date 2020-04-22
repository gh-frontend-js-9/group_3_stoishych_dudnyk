import React, { useEffect, useState } from 'react';

import {DocsState, Docs} from "../../interfaces/docs";
import PhotoCard from '../CardComponents/PhotoCard';
import Pagination from './Pagination';

import "../../assets/styles/scss/Cards/photoCards.scss";
import {Post} from "../../interfaces/docs";
import Spinner from '../Spinner';
import { useSelector } from 'react-redux';

interface IProps {
    classes?: string,
    isSpecificAuthor: boolean
}

const News:React.FC<IProps> = (props) => {

    const POST_PER_PAGE = 3;

    let [posts, setPosts] = useState<Post[]>([]);
    let [pages, setPages] = useState<number>(1);
    let [current, setCurrent] = useState<number>(1);
    let [isloading, setIsLoading] = useState<boolean>(true);

    const essential = useSelector((state: DocsState) => state.essential);
    const popular = useSelector((state: DocsState) => state.popular);
    const freelance = useSelector((state: DocsState) => state.freelance);
    const author = useSelector((state: DocsState) => state.currentAuthor);

    useEffect(() => {
        setIsLoading(true);
        let array:Docs = [];

        if (essential.payload !== undefined && freelance.payload !== undefined 
            && popular.payload !== undefined) {

            // if no author is selected, take different posts
            array = [ ...essential.payload, ...freelance.payload, ...popular.payload];
            
            // if author is selected take preloaded post from the store
            // because we can't pick up posts by author on the server
            if (author.payload !== undefined && props.isSpecificAuthor) {
                array = array.filter(el => el.author._id === author.payload?._id);
            }
                setPosts(array.slice( (current-1) * POST_PER_PAGE, current * POST_PER_PAGE));
                setPages(Math.ceil(array.length / 3));
                setIsLoading(false);
            }
        }, [essential.payload, popular.payload, freelance.payload, author.payload, 
            current, props.isSpecificAuthor]
    );
    
    useEffect(() => {
        //reset page if new author or another event occur
        setCurrent(1);
    }, [author.payload, props.isSpecificAuthor], )


    return !isloading 
        ?  
            !!posts.length ? 
            <>
                <ul className={props.classes}>
                    { posts.map(post => <PhotoCard post={post} isText={false} key={post._id} />) }
                </ul>

                { pages > 1 
                    ?  <Pagination changeCurrentPage={setCurrent} pages={pages} current={current}/>
                    : null
                }

            </> : <p className="section1__error">No posts found in the store</p>

        :   <Spinner size={3}/>
}

export default News;
