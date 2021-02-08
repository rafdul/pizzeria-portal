import { connect } from 'react-redux';
import Kitchen from './Kitchen';
import { getAll, getLoadingState, fetchFromAPI } from '../../../redux/kitchenRedux';

const mapStateToProps = (state) => ({
  order: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrder: () => dispatch(fetchFromAPI()),
  // fetchOrder: () => setTimeout(() => dispatch(fetchFromAPI()), 3000),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);


