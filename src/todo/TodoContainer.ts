import { connect } from 'react-redux';
import Todo from './Todo';
import { getTodoTheme, startTodoThemeChange } from './store/theme';

const mapStateToProps = (state: any, ownProps: any) => ({
  theme: getTodoTheme(state)
});

export default connect(mapStateToProps, {
  startTodoThemeChange
})(Todo);
