import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import todoSagas from '../todo/todoSagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: any[] = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares),
      (window as any).devToolsExtension
        ? (window as any).devToolsExtension()
        : (value: any) => value
    )
  );

  sagaMiddleware.run(todoSagas);

  return store;
};

export default configureStore;
