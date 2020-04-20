import {Docs} from "../interfaces/docs";
import { all, call, put, takeEvery } from '@redux-saga/core/effects';
import { getFreelancePostsData } from "../services/getAllPosts";
import {
    GetFreelancePostsActions,
    getFreelancePostsFailed,
    getFreelancePostsSucceeded
} from "../actions/getFreelancePosts";


function* fetchFreelancePosts() {
    try {
        const data: Docs = yield call(getFreelancePostsData);
        yield put (getFreelancePostsSucceeded(data))
    } catch(error) {
        yield put (getFreelancePostsFailed(error.response))
    }
}

export default function* fetchFreelancePostsSaga() {
    yield all([
        takeEvery(
            GetFreelancePostsActions.GET_FREELANCE_POSTS_REQUESTED,
            fetchFreelancePosts
        )
    ]);
}
