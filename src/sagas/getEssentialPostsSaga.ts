import { Docs } from "../interfaces/docs";
import { all, call, put, takeEvery } from '@redux-saga/core/effects';
import { getEssentialPostsData } from "../services/getAllPosts";
import {
    GetEssentialPostsActions,
    getEssentialPostsFailed,
    getEssentialPostsSucceeded
} from "../actions/getEssentialPosts";


function* fetchEssentialPosts() {
    try {
        const data: Docs = yield call(getEssentialPostsData);
        yield put (getEssentialPostsSucceeded(data))
    } catch(error) {
        yield put (getEssentialPostsFailed(error.response))
    }
}

export default function* fetchPopularPostsSaga() {
    yield all([
        takeEvery(
            GetEssentialPostsActions.GET_ESSENTIAL_POSTS_REQUESTED,
            fetchEssentialPosts
        )
    ]);
}
