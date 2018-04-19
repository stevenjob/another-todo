import { connect } from 'react-redux';
import { isTodoFilterSelected, setFilter } from '../store/filter';
import Filter from './Filter';

const mapStateToProps = (state: any, ownProps: any) => ({
  selected: isTodoFilterSelected(state, ownProps.filter)
});

export default connect(mapStateToProps, { setFilter })(Filter);
