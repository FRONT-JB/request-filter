import { call, put, takeLatest } from 'redux-saga/effects';
import { requestApi } from '~/api';
import { AxiosResponse } from 'axios';
import { getRequest, getRequestError, getRequestSucess } from '~/store/slices/request';
import { RequestList } from '~/types/request';

export function* requestSaga() {
  try {
    const res: AxiosResponse<RequestList> = yield call(requestApi);
    const { requests } = res.data;
    yield put(getRequestSucess(requests));
  } catch (error: any) {
    yield put(getRequestError(error));
  }
}

export function* watchReqeustSaga() {
  yield takeLatest(getRequest, requestSaga);
}
