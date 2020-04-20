import {PayloadAction} from "./payloadAction";
import {Action} from "redux";
import {Post} from "../interfaces/docs";
import {ErrorAction, ErrorResponse} from "./errorAction";
import {AxiosResponse} from "axios";

export enum CurrentPostActions {
    SET_CURRENT_POST = "SET_CURRENT_POST",
    GET_CURRENT_POST_REQUESTED = "GET_CURRENT_POST_REQUESTED",
    GET_CURRENT_POST_SUCCEEDED = "GET_CURRENT_POST_SUCCEEDED",
    GET_CURRENT_POST_FAILED = "GET_CURRENT_POST_FAILED"
}

export interface CurrentPost
    extends PayloadAction<CurrentPostActions.SET_CURRENT_POST, string> {
}

export interface GetCurrentPostRequested
    extends Action<CurrentPostActions.GET_CURRENT_POST_REQUESTED> {
}

export interface GetCurrentPostSucceeded
    extends PayloadAction<CurrentPostActions.GET_CURRENT_POST_SUCCEEDED, Post> {
}

export interface GetCurrentPostFailed
    extends ErrorAction<CurrentPostActions.GET_CURRENT_POST_FAILED> {
}

export type CurrentPostActionsType =
    | CurrentPost
    | GetCurrentPostRequested
    | GetCurrentPostSucceeded
    | GetCurrentPostFailed

export function setCurrentPost(id:string): CurrentPost {
    return {
        type: CurrentPostActions.SET_CURRENT_POST,
        payload: id
    }
}

export function getCurrentPostRequested(): GetCurrentPostRequested {
    return {
        type: CurrentPostActions.GET_CURRENT_POST_REQUESTED
    }
}

export function getCurrentPostSucceeded(post: Post): GetCurrentPostSucceeded {
    return {
        type: CurrentPostActions.GET_CURRENT_POST_SUCCEEDED,
        payload: post
    }
}

export function getCurrentPostFailed(errorResponse:AxiosResponse<ErrorResponse>): GetCurrentPostFailed {
    return {
        type: CurrentPostActions.GET_CURRENT_POST_FAILED,
        error: errorResponse
    }
}
