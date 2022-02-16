import { call, put, takeLatest } from 'redux-saga/effects';
import { axios } from 'utils';
import {
  CONTACT_REQUEST,
  CONTACT_SUCCESS,
  CONTACT_FAILURE,
} from 'store/actions';

function contactRequest(payload) {
  return axios.post('/api/contact', payload);
}

function* workerSaga(action) {
  try {
    const { data } = yield call(contactRequest, action.payload);
    yield put({ type: CONTACT_SUCCESS, payload: data });
  } catch(error) {
    yield put({ type: CONTACT_FAILURE, payload: error.message });
  }
}

export default function* watcherSaga() {
  yield takeLatest(CONTACT_REQUEST, workerSaga);
}