import Action from 'src/store/Action';
import TodoActionTypes from './actionTypes';
import StoreState from 'src/store/StoreState';
import { createReducer } from 'create-reducer-ts';

export enum TodoFilterTypes {
  SHOW_ALL = 'All',
  SHOW_COMPLETED = 'Completed',
  SHOW_ACTIVE = 'Active'
}

interface SetTodoFilterAction extends Action {
  type: TodoActionTypes.TODO_SET_FILTER;
  payload: TodoFilterTypes;
}

export const setFilter = (filter: TodoFilterTypes): SetTodoFilterAction => ({
  type: TodoActionTypes.TODO_SET_FILTER,
  payload: filter
});

const todoFilterReducer = createReducer<
  TodoFilterTypes,
  TodoActionTypes,
  SetTodoFilterAction
>(TodoFilterTypes.SHOW_ALL, {
  [TodoActionTypes.TODO_SET_FILTER]: (
    state: TodoFilterTypes,
    action: SetTodoFilterAction
  ) => {
    return action.payload;
  }
});

export const getFilter = (state: StoreState) => state.todos.filter;

export const isTodoFilterSelected = (
  state: StoreState,
  filterToCheck: TodoFilterTypes
): boolean => {
  return getFilter(state) === filterToCheck;
};

export default todoFilterReducer;
