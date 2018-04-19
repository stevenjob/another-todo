import { combineReducers } from 'redux';
import reducer from 'src/todo/store';

const rootReducer = combineReducers({
  todos: reducer
});

export default rootReducer;
