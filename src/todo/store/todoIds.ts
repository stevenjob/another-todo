import TodoActionTypes from './actionTypes';
import { RemoveTodoAction, AddTodoAction } from './todosById';

function idsReducer(
  state: string[] = [],
  action: RemoveTodoAction | AddTodoAction
) {
  switch (action.type) {
    case TodoActionTypes.TODO_ADD: {
      const todoId = action.payload.todo.id;
      return [...state, todoId];
    }
    case TodoActionTypes.TODO_REMOVE: {
      const todoId = action.payload.id;
      return state.filter(id => id !== todoId);
    }
    default:
      return state;
  }
}

export default idsReducer;
