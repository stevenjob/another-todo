import TodoActionTypes from './actionTypes';
import Action from 'src/store/Action';
import Todo from '../TodoModel';
import StoreState from 'src/store/StoreState';
import { createReducer } from 'create-reducer-ts';
import * as uuid from 'uuid/v4';
import { getFilter, TodoFilterTypes } from './filter';

export interface AddTodoAction extends Action {
  type: TodoActionTypes.TODO_ADD;
  payload: { todo: Todo };
}

interface UpdateTodoAction extends Action {
  type: TodoActionTypes.TODO_UPDATE;
  payload: { todo: Todo };
}

export interface RemoveTodoAction extends Action {
  type: TodoActionTypes.TODO_REMOVE;
  payload: { id: string };
}

export interface TodosIsDoneToggleAction extends Action {
  type: TodoActionTypes.TODOS_TOGGLE_DONE;
  payload: boolean;
}

type TodosByIdActions =
  | UpdateTodoAction
  | AddTodoAction
  | RemoveTodoAction
  | TodosIsDoneToggleAction;

export type TodosReducer = {
  [index: string]: TodoReducer;
};
export type TodoReducer = Todo;

const handleUpdateTodo = (state: TodosReducer, action: UpdateTodoAction) => {
  const todoId = action.payload.todo.id;
  if (state[todoId]) {
    return {
      ...state,
      [todoId]: todoReducer(state[todoId], action)
    };
  }
  return state;
};

const handleAddTodo = (state: TodosReducer, action: AddTodoAction) => {
  const todoId = action.payload.todo.id;
  return {
    ...state,
    [todoId]: todoReducer(state[todoId], action)
  };
};

const handleTodosToggleDone = (
  state: TodosReducer,
  action: TodosIsDoneToggleAction
) => {
  return Object.keys(state).reduce((accumulator, key) => {
    return {
      ...accumulator,
      [key]: { ...state[key], isDone: action.payload }
    };
  }, {});
};

function todoReducer(
  state: TodoReducer,
  action: TodosByIdActions
): TodoReducer {
  switch (action.type) {
    case TodoActionTypes.TODO_UPDATE:
    case TodoActionTypes.TODO_ADD:
      return {
        ...state,
        ...action.payload.todo
      };
    default:
      return state;
  }
}

const todosByIdReducer = createReducer<
  TodosReducer,
  TodoActionTypes,
  TodosByIdActions
>(
  {},
  {
    [TodoActionTypes.TODO_UPDATE]: handleUpdateTodo,
    [TodoActionTypes.TODO_ADD]: handleAddTodo,
    [TodoActionTypes.TODOS_TOGGLE_DONE]: handleTodosToggleDone
  }
);

export const getTodoActiveCount = (state: StoreState): number => {
  return getTodos(state).reduce((accumulator: number, item: Todo) => {
    return accumulator + Number(!item.isDone);
  }, 0);
};

export const removeTodo = (id: string): RemoveTodoAction => ({
  type: TodoActionTypes.TODO_REMOVE,
  payload: {
    id
  }
});

export const updateTodo = (todo: Todo): UpdateTodoAction => ({
  type: TodoActionTypes.TODO_UPDATE,
  payload: {
    todo
  }
});

export const addTodo = (text: string): AddTodoAction => ({
  type: TodoActionTypes.TODO_ADD,
  payload: {
    todo: { text, id: uuid() }
  }
});

export const toggleTodosIsDone = (
  isDone: boolean
): TodosIsDoneToggleAction => ({
  type: TodoActionTypes.TODOS_TOGGLE_DONE,
  payload: isDone
});

export const getTodos = (state: StoreState): Todo[] => {
  return state.todos.ids.map(id => state.todos.byId[id]);
};

export const getFilteredTodos = (state: StoreState): Todo[] => {
  const todos = getTodos(state);
  const filter = getFilter(state);
  switch (filter) {
    case TodoFilterTypes.SHOW_ALL:
      return todos;
    case TodoFilterTypes.SHOW_COMPLETED:
      return todos.filter(todo => todo.isDone);
    case TodoFilterTypes.SHOW_ACTIVE:
      return todos.filter(todo => !todo.isDone);
  }
};

export const doneAllTodos = (state: StoreState): boolean => {
  return getTodos(state).filter(todo => !todo.isDone).length === 0;
};

export default todosByIdReducer;
