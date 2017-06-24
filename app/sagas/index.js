import { fork } from 'redux-saga/effects';
import { add } from './results';

export default function* root() {
  yield [
    fork(add)
  ];
}
