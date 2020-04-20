import { all } from '@redux-saga/core/effects';
import getPopularPostsSaga from "./sagas/getPopularPostsSaga";
import getEssentialPostsSaga from "./sagas/getEssentialPostsSaga";
import getFreelancePostsSaga from "./sagas/getFreelancePostsSaga";
import getCurrentPostSaga from "./sagas/getCurrentPostSaga";

export default function* rootSaga() {
    yield all([
        getPopularPostsSaga(),
        getEssentialPostsSaga(),
        getFreelancePostsSaga(),
        getCurrentPostSaga(),
    ])
}
