import { connect } from 'react-redux';
import List from './List';
import { bindActionCreators } from 'redux';
import { getFilteredTodos, updateTodo, removeTodo } from '../store/todosById';

const mapStateToProps = (state: any, ownProps: any) => ({
  todos: getFilteredTodos(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators({ updateTodo, removeTodo }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
