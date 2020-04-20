import {Reducer} from "redux";
import {Docs} from "../interfaces/docs";
import {PopularPostsActions, GetPopularPostsActions} from "../actions/getPopularPosts";
import {State, StateStatus} from "../interfaces/State";

export type PostsState = State<Docs>
export const getPopularPostsReducer:Reducer<PostsState, PopularPostsActions>
    = (state= { status: StateStatus.INIT },action) => {
    switch (action.type) {
        case GetPopularPostsActions.GET_POPULAR_POSTS_REQUESTED: {
            return {
                status: StateStatus.LOADING
            }
        }
        case GetPopularPostsActions.GET_POPULAR_POSTS_SUCCEEDED: {
            return {
                status: StateStatus.LOADED,
                payload: action.payload
            }
        }
        case GetPopularPostsActions.GET_POPULAR_POSTS_FAILED: {
            return {
                status: StateStatus.FAILED
            }
        }
        default: return state;
    }
}
