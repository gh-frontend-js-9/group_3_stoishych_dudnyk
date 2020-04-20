import {Reducer} from "redux";
import {Docs} from "../interfaces/docs";
import {State, StateStatus} from "../interfaces/State";
import {FreelancePostsActions, GetFreelancePostsActions} from "../actions/getFreelancePosts";

export type PostsState = State<Docs>
export const getFreelancePostsReducer:Reducer<PostsState, FreelancePostsActions>
    = (state= { status: StateStatus.INIT },action) => {
    switch (action.type) {
        case GetFreelancePostsActions.GET_FREELANCE_POSTS_REQUESTED: {
            return {
                status: StateStatus.LOADING
            }
        }
        case GetFreelancePostsActions.GET_FREELANCE_POSTS_SUCCEEDED: {
            return {
                status: StateStatus.LOADED,
                payload: action.payload
            }
        }
        case GetFreelancePostsActions.GET_FREELANCE_POSTS_FAILED: {
            return {
                status: StateStatus.FAILED
            }
        }
        default: return state;
    }
};
