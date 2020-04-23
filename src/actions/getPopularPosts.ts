import { Action } from 'redux';
import { AxiosResponse } from 'axios';
import { PayloadAction } from './payloadAction';
import { Docs } from '../interfaces/docs';
import { ErrorAction, ErrorResponse } from './errorAction';

export enum GetPopularPostsActions {
    GET_POPULAR_POSTS_REQUESTED = 'GET_POPULAR_POSTS_REQUESTED',
    GET_POPULAR_POSTS_SUCCEEDED = 'GET_POPULAR_POSTS_SUCCEEDED',
    GET_POPULAR_POSTS_FAILED = 'GET_POPULAR_POSTS_FAILED',
}

export interface GetPopularPostsRequested
    extends Action<GetPopularPostsActions.GET_POPULAR_POSTS_REQUESTED> {
}

export interface GetPopularPostsSucceeded
    extends PayloadAction<GetPopularPostsActions.GET_POPULAR_POSTS_SUCCEEDED, Docs> {
}

export interface GetPopularPostsFailed
    extends ErrorAction<GetPopularPostsActions.GET_POPULAR_POSTS_FAILED> {
}


export type PopularPostsActions =
    | GetPopularPostsRequested
    | GetPopularPostsSucceeded
    | GetPopularPostsFailed


export function getPopularPostsRequested(): GetPopularPostsRequested {
  return {
    type: GetPopularPostsActions.GET_POPULAR_POSTS_REQUESTED,
  };
}

export function getPopularPostsSucceeded(docs: Docs): GetPopularPostsSucceeded {
  return {
    type: GetPopularPostsActions.GET_POPULAR_POSTS_SUCCEEDED,
    payload: docs,
  };
}

export function getPopularPostsFailed(
  errorResponse: AxiosResponse<ErrorResponse>,
): GetPopularPostsFailed {
  return {
    type: GetPopularPostsActions.GET_POPULAR_POSTS_FAILED,
    error: errorResponse,
  };
}
