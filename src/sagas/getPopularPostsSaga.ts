import {
  all, call, put, takeEvery,
} from '@redux-saga/core/effects';
import { Docs } from '../interfaces/docs';
import { getPopularPostsData } from '../services/getAllPosts';
import { GetPopularPostsActions, getPopularPostsFailed, getPopularPostsSucceeded } from '../actions/getPopularPosts';

function* fetchPopularPosts() {
  try {
    const data: Docs = yield call(getPopularPostsData);
    yield put(getPopularPostsSucceeded(data));
  } catch (error) {
    yield put(getPopularPostsFailed(error.response));
  }
}

export default function* fetchPopularPostsSaga() {
  yield all([
    takeEvery(
      GetPopularPostsActions.GET_POPULAR_POSTS_REQUESTED,
      fetchPopularPosts,
    ),
  ]);
}
