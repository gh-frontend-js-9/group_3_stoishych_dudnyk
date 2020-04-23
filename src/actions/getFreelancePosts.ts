import { Action } from 'redux';
import { AxiosResponse } from 'axios';
import { PayloadAction } from './payloadAction';
import { Docs } from '../interfaces/docs';
import { ErrorAction, ErrorResponse } from './errorAction';

export enum GetFreelancePostsActions {
    GET_FREELANCE_POSTS_REQUESTED = 'GET_FREELANCE_POSTS_REQUESTED',
    GET_FREELANCE_POSTS_SUCCEEDED = 'GET_FREELANCE_POSTS_SUCCEEDED',
    GET_FREELANCE_POSTS_FAILED = 'GET_FREELANCE_POSTS_FAILED',
}

export interface GetFreelancePostsRequested
    extends Action<GetFreelancePostsActions.GET_FREELANCE_POSTS_REQUESTED> {
}

export interface GetFreelancePostsSucceeded
    extends PayloadAction<GetFreelancePostsActions.GET_FREELANCE_POSTS_SUCCEEDED, Docs> {
}

export interface GetFreelancePostsFailed
    extends ErrorAction<GetFreelancePostsActions.GET_FREELANCE_POSTS_FAILED> {
}


export type FreelancePostsActions =
    | GetFreelancePostsRequested
    | GetFreelancePostsSucceeded
    | GetFreelancePostsFailed


export function getFreelancePostsRequested(): GetFreelancePostsRequested {
  return {
    type: GetFreelancePostsActions.GET_FREELANCE_POSTS_REQUESTED,
  };
}

export function getFreelancePostsSucceeded(docs: Docs): GetFreelancePostsSucceeded {
  return {
    type: GetFreelancePostsActions.GET_FREELANCE_POSTS_SUCCEEDED,
    payload: docs,
  };
}

export function getFreelancePostsFailed(
  errorResponse: AxiosResponse<ErrorResponse>,
): GetFreelancePostsFailed {
  return {
    type: GetFreelancePostsActions.GET_FREELANCE_POSTS_FAILED,
    error: errorResponse,
  };
}
