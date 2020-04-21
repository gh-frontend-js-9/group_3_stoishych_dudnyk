import React, { useEffect, useState } from 'react';

import requestAPI from '../../services/requestAPI';

import PhotoCard from '../CardComponents/PhotoCard';
import Pagination from './Pagination';

import "../../assets/styles/scss/Cards/photoCards.scss";
import {Post} from "../../interfaces/docs";
import Spinner from '../Spinner';

interface IProps {
    classes?: string
}

const News:React.FC<IProps> = (props) => {

    let [posts, setPosts] = useState<Post[]>([]);
    let [pages, setPages] = useState<number>(1);
    let [current, setCurrent] = useState<number>(1);
    let [isloading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);
        requestAPI.getPostsList(`/?page=${current}&limit=3fields=title,_id,category,author,featuredImage`)
        .then(resp => {
            setPosts(resp.data.docs);
            setPages(resp.data.totalPages);
            setIsLoading(false);
        });

    }, [current]);

    return !isloading 
        ?
            <>
                <ul className={props.classes}>
                    { posts.map(post => <PhotoCard post={post} isText={false} key={post._id} />) }
                </ul>
    
                <Pagination changeCurrentPage={setCurrent} pages={pages} current={current}/>
            </>
        :   <Spinner size={3}/>
}

export default News;
