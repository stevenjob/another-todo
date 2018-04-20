import StoreState from 'src/store/StoreState';
import Action from 'src/store/Action';
import TodoActionTypes from './actionTypes';
import TodoThemeModel from '../TodoThemeModel';
import createReducer from 'create-reducer-ts';
import { complement, lighten } from 'polished';

interface TodoThemeUpdateAction extends Action {
  type: TodoActionTypes.TODO_THEME_UPDATE;
  payload: TodoThemeModel;
}

interface TodoThemeStartAction extends Action {
  type: TodoActionTypes.TODO_THEME_START;
}

export const startTodoThemeChange = (): TodoThemeStartAction => ({
  type: TodoActionTypes.TODO_THEME_START
});

export const updateTodoTheme = (
  theme: TodoThemeModel
): TodoThemeUpdateAction => ({
  type: TodoActionTypes.TODO_THEME_UPDATE,
  payload: {
    ...theme
  }
});

const todoThemeReducer = createReducer<
  TodoThemeModel,
  TodoActionTypes,
  TodoThemeUpdateAction
>(
  {
    primary: '#ab0000',
    secondary: complement('#ab0000'),
    background: lighten(0.5, complement('#ab0000'))
  },
  {
    [TodoActionTypes.TODO_THEME_UPDATE]: (
      state: TodoThemeModel,
      action: TodoThemeUpdateAction
    ) => {
      return { ...action.payload };
    }
  }
);

const generateFullTheme = (theme: TodoThemeModel) => {
  return {
    ...theme,
    lightSecondary: lighten(0.3, theme.secondary),
    lightPrimary: lighten(0.6, theme.primary)
  };
};

export const getTodoTheme = (state: StoreState): TodoThemeModel => {
  return generateFullTheme(state.todos.theme);
};

export default todoThemeReducer;
