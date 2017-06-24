import { put, takeEvery } from 'redux-saga/effects';

function* addAsync() {
  yield put({type: 'ADD'});
}

export function* add() {
  yield takeEvery('ADD_ASYNC', addAsync);
}
