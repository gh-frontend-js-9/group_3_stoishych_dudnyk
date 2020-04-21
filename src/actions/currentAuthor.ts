import {PayloadAction} from "./payloadAction";
import {Action} from "redux";
import {Author} from "../interfaces/author";
import {ErrorAction, ErrorResponse} from "./errorAction";
import {AxiosResponse} from "axios";

export enum CurrentAuthorActions {
    SET_CURRENT_AUTHOR = "SET_CURRENT_AUTHOR",
    GET_CURRENT_AUTHOR_REQUESTED = "GET_CURRENT_AUTHOR_REQUESTED",
    GET_CURRENT_AUTHOR_SUCCEEDED = "GET_CURRENT_AUTHOR_SUCCEEDED",
    GET_CURRENT_AUTHOR_FAILED = "GET_CURRENT_AUTHOR_FAILED"
}

export interface CurrentAuthor
    extends PayloadAction<CurrentAuthorActions.SET_CURRENT_AUTHOR, Author> {
}

export interface GetCurrentAuthorRequested
    extends Action<CurrentAuthorActions.GET_CURRENT_AUTHOR_REQUESTED> {
}

export interface GetCurrentAuthorSucceeded
    extends PayloadAction<CurrentAuthorActions.GET_CURRENT_AUTHOR_SUCCEEDED, Author> {
}

export interface GetCurrentAuthorFailed
    extends ErrorAction<CurrentAuthorActions.GET_CURRENT_AUTHOR_FAILED> {
}

export type CurrentAuthorActionsType =
    | CurrentAuthor
    | GetCurrentAuthorRequested
    | GetCurrentAuthorSucceeded
    | GetCurrentAuthorFailed

export function setCurrentAuthor(author:Author): CurrentAuthor {
    return {
        type: CurrentAuthorActions.SET_CURRENT_AUTHOR,
        payload: author
    }
}

export function getCurrentAuthorRequested(): GetCurrentAuthorRequested {
    return {
        type: CurrentAuthorActions.GET_CURRENT_AUTHOR_REQUESTED
    }
}

export function getCurrentAuthorSucceeded(author: Author): GetCurrentAuthorSucceeded {
    return {
        type: CurrentAuthorActions.GET_CURRENT_AUTHOR_SUCCEEDED,
        payload: author
    }
}

export function getCurrentAuthorFailed(errorResponse:AxiosResponse<ErrorResponse>): GetCurrentAuthorFailed {
    return {
        type: CurrentAuthorActions.GET_CURRENT_AUTHOR_FAILED,
        error: errorResponse
    }
}
