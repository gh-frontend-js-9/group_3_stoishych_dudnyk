import { Action } from 'redux';
import { AxiosResponse } from 'axios';
import { PayloadAction } from './payloadAction';
import { Docs } from '../interfaces/docs';
import { ErrorAction, ErrorResponse } from './errorAction';

export enum GetEssentialPostsActions {
    GET_ESSENTIAL_POSTS_REQUESTED = 'GET_ESSENTIAL_POSTS_REQUESTED',
    GET_ESSENTIAL_POSTS_SUCCEEDED = 'GET_ESSENTIAL_POSTS_SUCCEEDED',
    GET_ESSENTIAL_POSTS_FAILED = 'GET_ALL_POSTS_FAILED',
}

export interface GetEssentialPostsRequested
    extends Action<GetEssentialPostsActions.GET_ESSENTIAL_POSTS_REQUESTED> {
}

export interface GetEssentialPostsSucceeded
    extends PayloadAction<GetEssentialPostsActions.GET_ESSENTIAL_POSTS_SUCCEEDED, Docs> {
}

export interface GetEssentialPostsFailed
    extends ErrorAction<GetEssentialPostsActions.GET_ESSENTIAL_POSTS_FAILED> {
}


export type EssentialPostsActions =
    | GetEssentialPostsRequested
    | GetEssentialPostsSucceeded
    | GetEssentialPostsFailed


export function getEssentialPostsRequested(): GetEssentialPostsRequested {
  return {
    type: GetEssentialPostsActions.GET_ESSENTIAL_POSTS_REQUESTED,
  };
}

export function getEssentialPostsSucceeded(docs: Docs): GetEssentialPostsSucceeded {
  return {
    type: GetEssentialPostsActions.GET_ESSENTIAL_POSTS_SUCCEEDED,
    payload: docs,
  };
}

export function getEssentialPostsFailed(
  errorResponse: AxiosResponse<ErrorResponse>,
): GetEssentialPostsFailed {
  return {
    type: GetEssentialPostsActions.GET_ESSENTIAL_POSTS_FAILED,
    error: errorResponse,
  };
}
