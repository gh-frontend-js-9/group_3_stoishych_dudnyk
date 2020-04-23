import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Home } from "./pages/Home";
import Author from './pages/Author';

import {BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from './components/Footer';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faVk, faPinterestP, faInstagram, faTwitter, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {
    faSyncAlt,
    faChevronLeft,
    faChevronRight,
    faEllipsisH,
    faTimes,
    faHeart,
    faEye
} from '@fortawesome/free-solid-svg-icons';
import {Post} from "./pages/Post";
import {getPopularPostsRequested} from "./actions/getPopularPosts";
import {getEssentialPostsRequested} from "./actions/getEssentialPosts";
import {getFreelancePostsRequested} from "./actions/getFreelancePosts";

library.add(faVk, faPinterestP, faInstagram, faTwitter, faFacebookF,
    faSyncAlt, faChevronLeft, faChevronRight, faEllipsisH,
    faTimes, faHeart, faEye);


export function useQuery() {
    return new URLSearchParams(useLocation().search);
}


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPopularPostsRequested());
        dispatch(getEssentialPostsRequested());
        dispatch(getFreelancePostsRequested());
    });

    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/author' component={Author}/>
                <Route path="/post" component={Post}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
