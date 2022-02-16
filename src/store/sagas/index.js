import { fork } from 'redux-saga/effects';
import projectsSaga from './projectsSaga';
import blogSaga from './blogSaga';
import contactSaga from './contactSaga';

export default function* rootSaga() {
  yield fork(projectsSaga);
  yield fork(blogSaga);
  yield fork(contactSaga);
}