import { connect } from 'react-redux';
import Tables from './Tables';
import { getAll, getLoadingState, fetchFromAPI } from '../../../redux/bookedTable';

const mapStateToProps = (state) => ({
  bookedTable: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchBookingsAndEvents: () => dispatch(fetchFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
