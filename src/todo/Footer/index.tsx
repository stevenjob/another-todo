import { connect } from 'react-redux';
import Footer from './Footer';
import { getTodoActiveCount } from '../store/todosById';

const mapStateToProps = (state: any, ownProps: any) => ({
  activeCount: getTodoActiveCount(state)
});

export default connect(mapStateToProps)(Footer);
