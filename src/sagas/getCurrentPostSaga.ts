import {
  all, call, put, takeEvery,
} from '@redux-saga/core/effects';
import { Post } from '../interfaces/docs';
import { getCurrentPost } from '../services/getCurrentPost';
import { CurrentPostActions, getCurrentPostFailed, getCurrentPostSucceeded } from '../actions/currentPost';

function* fetchCurrentPost() {
  try {
    const data: Post = yield call(getCurrentPost);
    yield put(getCurrentPostSucceeded(data));
  } catch (error) {
    yield put(getCurrentPostFailed(error));
  }
}

export default function* fetchCurrentPostSaga() {
  yield all([
    takeEvery(
      CurrentPostActions.GET_CURRENT_POST_REQUESTED,
      fetchCurrentPost,
    ),
  ]);
}
