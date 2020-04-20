import {combineReducers} from 'redux'
import {getPopularPostsReducer} from "./getPopularPosts";
import {getEssentialPostsReducer} from "./getEssentialPosts";
import {getFreelancePostsReducer} from "./getFreelancePosts";
import {currentPostReducer} from "./currentPost";

export const rootReducer = combineReducers({
    popular: getPopularPostsReducer,
    essential: getEssentialPostsReducer,
    freelance: getFreelancePostsReducer,
    currentPost: currentPostReducer
});
