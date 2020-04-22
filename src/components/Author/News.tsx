import React, { useEffect, useState } from 'react';

import requestAPI from '../../services/requestAPI';
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
        // if no author is selected, take different posts
        if (author.payload === undefined || !props.isSpecificAuthor) {
            
            requestAPI.getPostsList(`/?page=${current}&limit=3fields=title,_id,category,author,featuredImage`)
            .then(resp => {
                setPosts(resp.data.docs);
                setPages(resp.data.totalPages);
                setIsLoading(false);
            });

        } else {
            // if author is selected take preloaded post from the store
            // because we can't pick up posts by author on the server
            let array:Docs = [];
            
            if (essential.payload !== undefined && freelance.payload !== undefined 
                && popular.payload !== undefined) {
                array = [ ...essential.payload, ...freelance.payload, ...popular.payload];
                array = array.filter(el => el.author._id === author.payload?._id);
            }

            setPosts(array.slice(current, current+3));
            setPages(Math.ceil(array.length / 3))
            setIsLoading(false);
        }
    }, [essential.payload, popular.payload, freelance.payload, author.payload, 
        current, props.isSpecificAuthor]);

    return !isloading 
        ?  
            !!posts.length ? 
            <>
                <ul className={props.classes}>
                    { posts.map(post => <PhotoCard post={post} isText={false} key={post._id} />) }
                </ul>
    
                <Pagination changeCurrentPage={setCurrent} pages={pages} current={current}/>
            </> : <p className="section1__error">No posts found in the store</p>

        :   <Spinner size={3}/>
}

export default News;
