import { all, fork } from 'redux-saga/effects';
import mainSaga from '../container/Main/saga';

export default function* rootSaga() {
  yield all([
    fork(mainSaga),
  ])
}