import React, { useEffect, useState } from 'react';

import requestAPI from '../../requestAPI';
import {IPost} from '../../interfaces/cardInterfaces';

import PhotoCard from '../CardComponents/PhotoCard';
import Pagination from './Pagination';

import "../../assets/styles/scss/Cards/photoCards.scss";

const News:React.FC = () => {
    
    let [posts, setPosts] = useState<IPost[]>([]);
    let [pages, setPages] = useState<number>(0);
    let [current, setCurrent] = useState<number>(1);
    
    useEffect(() => {
        requestAPI.getPostsList(`/?page=${current}&limit=3fields=title,category,author,featuredImage`)
        .then(resp => {
            setPosts(resp.data.docs);
            setPages(resp.data.pages);    
        });
    }, [current])
    
    console.log(posts)
    return (
        <>
            <ul>
                { posts.map(post => <PhotoCard post={post} isText={false} key={post._id} />) }
            </ul>

            <Pagination changeCurrentPage={setCurrent} pages={pages} current={current}/>
        </>
    )
}

export default News;