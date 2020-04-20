import {Reducer} from "redux";
import {Docs} from "../interfaces/docs";
import {State, StateStatus} from "../interfaces/State";
import {EssentialPostsActions, GetEssentialPostsActions} from "../actions/getEssentialPosts";

export type PostsState = State<Docs>

export const getEssentialPostsReducer:Reducer<PostsState, EssentialPostsActions>
    = (state= { status: StateStatus.INIT },action) => {
    switch (action.type) {
        case GetEssentialPostsActions.GET_ESSENTIAL_POSTS_REQUESTED: {
            return {
                status: StateStatus.LOADING
            }
        }
        case GetEssentialPostsActions.GET_ESSENTIAL_POSTS_SUCCEEDED: {
            return {
                status: StateStatus.LOADED,
                payload: action.payload
            }
        }
        case GetEssentialPostsActions.GET_ESSENTIAL_POSTS_FAILED: {
            return {
                status: StateStatus.FAILED
            }
        }
        default: return state;
    }
};
