import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'src/store/configureStore';
import App from './App';
import { addTodo } from './todo/store/todosById';

const store = configureStore();

store.dispatch(addTodo('hello'));
store.dispatch(addTodo('hello2'));
store.dispatch(addTodo('hello4'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
