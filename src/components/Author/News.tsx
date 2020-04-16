import React, { useEffect, useState } from 'react';

import requestAPI from '../../requestAPI';
import {IPost} from '../../interfaces/cardInterfaces';

import PhotoCard from '../CardComponents/PhotoCard';
import Pagination from './Pagination';

import "../../assets/styles/scss/Cards/photoCards.scss";

interface IProps {
    classes?: string
}

const News:React.FC<IProps> = (props) => {
    
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
    
    return (
        <>
            <ul className={props.classes}>
                { posts.map(post => <PhotoCard post={post} isText={false} key={post._id} />) }
            </ul>

            <Pagination changeCurrentPage={setCurrent} pages={pages} current={current}/>
        </>
    )
}

export default News;