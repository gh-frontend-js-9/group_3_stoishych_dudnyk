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
    classes?: string
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
        if (author.payload === undefined) {
            requestAPI.getPostsList(`/?page=${current}&limit=3fields=title,_id,category,author,featuredImage`)
            .then(resp => {
                setPosts(resp.data.docs);
                setPages(resp.data.totalPages);
                setIsLoading(false);
            });
        } else {
            console.log(essential.payload)
            let array:Docs = [];
            if (essential.payload !== undefined && freelance.payload !== undefined 
                && popular.payload !== undefined) {
                array = [ ...essential.payload, ...freelance.payload, ...popular.payload];
                array = array.filter(el => el.author._id === author.payload?._id);
            }
            setPosts(array);
            setPages(Math.ceil(array.length / 3))
            setIsLoading(false);
        }

    }, [current, essential.payload, popular.payload, freelance.payload]);


    // useEffect(() => {
    //     setIsLoading(true);
        // let array:Docs = [];
        // console.log(essential.payload)
        
        // if (essential.payload !== undefined && freelance.payload !== undefined 
        //     && popular.payload !== undefined) {
        //     console.log("ASDSADASDASASD");
        //     array = [ ...essential.payload, ...freelance.payload, ...popular.payload];
        //     console.log(array);
        //     array = array.filter(el => {
        //         console.log("el");
        //         console.log(el._id);
        //         console.log(author.payload?._id);
        //         console.log(el.author._id === author.payload?._id)
        //         return el.author._id === author.payload?._id});

        // }

        // setPosts(array);

        // setIsLoading(false);
    // }, [current])


    return !isloading 
        ?  
            !!posts.length ? 
            <>
                <ul className={props.classes}>
                    { posts.map(post => <PhotoCard post={post} isText={false} key={post._id} />) }
                </ul>
    
                <Pagination changeCurrentPage={setCurrent} pages={pages} current={current}/>
            </> : <p className="section1__error">No posts found</p>

        :   <Spinner size={3}/>
}

export default News;
