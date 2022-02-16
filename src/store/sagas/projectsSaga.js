import { call, put, takeLatest } from 'redux-saga/effects';
import { axios } from 'utils';
import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
} from 'store/actions';


function projectsRequest() {
  return axios.get('api/projects');
}

function* workerSaga() {
  try {
    const { data } = yield call(projectsRequest);
    yield put({ type: FETCH_PROJECTS_SUCCESS, payload: { projects: data }});
  } catch(error) {
    yield put({ type: FETCH_PROJECTS_FAILURE, payload: { error: error.message }});
  }
}

export default function* watcherSaga() {
  yield takeLatest(FETCH_PROJECTS_REQUEST, workerSaga);
}