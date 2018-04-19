import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { updateTodoTheme, getTodoTheme } from './store/theme';
import TodoThemeModel from './TodoThemeModel';
import { lighten, adjustHue, complement } from 'polished';
import { delay } from 'redux-saga';
import TodoActionTypes from './store/actionTypes';

const getNextRandomTheme = (currentTheme: TodoThemeModel): TodoThemeModel => {
  const primary: string = adjustHue(Math.random() * 360, currentTheme.primary);
  const secondary: string = complement(currentTheme.primary);
  const background: string = lighten(0.5, secondary);
  return {
    primary,
    secondary,
    background
  };
};

function* loggerSaga(action: any): any {
  console.log(action.type);
}

function* themeSaga(action: any): any {
  while (true) {
    yield call(delay, 50000);
    const oldTheme = yield select(getTodoTheme);
    const newTheme = getNextRandomTheme(oldTheme);
    yield put(updateTodoTheme(newTheme));
  }
}

export default function* todoSagas() {
  yield all([
    takeEvery('*', loggerSaga),
    takeEvery(TodoActionTypes.TODO_THEME_START, themeSaga)
  ]);
}
