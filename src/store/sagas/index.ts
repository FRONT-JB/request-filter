import { all } from 'redux-saga/effects';
import { watchReqeustSaga } from './request';

export default function* rootSaga() {
  yield all([watchReqeustSaga()]);
}
