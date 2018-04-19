import { connect } from 'react-redux';
import Header from './Header';
import {
  addTodo as onSave,
  doneAllTodos,
  toggleTodosIsDone
} from '../store/todosById';
import StoreState from 'src/store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  allDone: doneAllTodos(state)
});

export default connect(mapStateToProps, { onSave, toggleTodosIsDone })(Header);
