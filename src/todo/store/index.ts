import todosByIdReducer, { TodosReducer } from './todosById';
import idsReducer from './todoIds';
import todoThemeReducer from './theme';
import todoFilterReducer, { TodoFilterTypes } from './filter';
import { combineReducers } from 'redux';
import TodoThemeModel from '../TodoThemeModel';

export interface TodoStoreState {
  byId: TodosReducer;
  ids: string[];
  theme: TodoThemeModel;
  filter: TodoFilterTypes;
}

export default combineReducers<TodoStoreState>({
  byId: todosByIdReducer,
  ids: idsReducer,
  theme: todoThemeReducer,
  filter: todoFilterReducer
});
