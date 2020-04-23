import { combineReducers } from 'redux';
import { getPopularPostsReducer } from './getPopularPosts';
import { getEssentialPostsReducer } from './getEssentialPosts';
import { getFreelancePostsReducer } from './getFreelancePosts';
import { currentPostReducer } from './currentPost';
import { currentAuthorReducer } from './currentAuthor';

export const rootReducer = combineReducers({
  popular: getPopularPostsReducer,
  essential: getEssentialPostsReducer,
  freelance: getFreelancePostsReducer,
  currentPost: currentPostReducer,
  currentAuthor: currentAuthorReducer,
});
