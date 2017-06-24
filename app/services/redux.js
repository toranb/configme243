import redux from 'redux';
import ReduxService from 'ember-redux/services/redux';
import createSagaMiddleWare from 'redux-saga';
import reducers from '../reducers/index';
import root from '../sagas/index';

const { createStore, applyMiddleware, compose } = redux;

const sagaMiddleware = createSagaMiddleWare();

export default ReduxService.extend({
  makeStoreInstance() {
    const middleware = applyMiddleware(sagaMiddleware);
    const createStoreWithMiddleware = compose(middleware)(createStore);
    const store = createStoreWithMiddleware(reducers);
    sagaMiddleware.run(root);
    return store;
  }
});
