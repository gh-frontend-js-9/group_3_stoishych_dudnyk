import { Reducer } from "redux";
import { CurrentPostActions, CurrentPostActionsType } from "../actions/currentPost";
import { StateStatus } from "../interfaces/State";
import {PostResponse} from "../interfaces/post";
import {loadState} from "../localStorage";

const currentId = loadState('currentPost');

const initialState = {
    status: StateStatus.INIT,
    id: currentId || ''
};

export interface CurrentPostState {
    status?: string,
    id?: string,
    payload?: PostResponse
}

export const currentPostReducer: Reducer<any, CurrentPostActionsType> =
    (state= initialState, action) => {
    switch (action.type) {
        case CurrentPostActions.SET_CURRENT_POST: {
            return {
                id: action.payload
            }
        }
        case CurrentPostActions.GET_CURRENT_POST_REQUESTED: {
            return {
                ...state,
                status: StateStatus.LOADING
            }
        }
        case CurrentPostActions.GET_CURRENT_POST_SUCCEEDED: {
            return {
                ...state,
                status: StateStatus.LOADED,
                payload: action.payload,
            }
        }
        case CurrentPostActions.GET_CURRENT_POST_FAILED: {
            return {
                ...state,
                status: StateStatus.FAILED,
            }
        }
        default: return state;
    }
};
