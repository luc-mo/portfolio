import { call, put, takeLatest } from 'redux-saga/effects';
import { axios } from 'utils';
import {
  FETCH_ENTRIES_REQUEST,
  FETCH_ENTRIES_SUCCESS,
  FETCH_ENTRIES_FAILURE,
} from 'store/actions';


function entriesRequest() {
  return axios.get('api/entries');
}

function* workerSaga() {
  try {
    const { data } = yield call(entriesRequest);
    yield put({ type: FETCH_ENTRIES_SUCCESS, payload: { entries: data }});
  } catch(error) {
    yield put({ type: FETCH_ENTRIES_FAILURE, payload: { error: error.message }});
  }
}

export default function* watcherSaga() {
  yield takeLatest(FETCH_ENTRIES_REQUEST, workerSaga);
}