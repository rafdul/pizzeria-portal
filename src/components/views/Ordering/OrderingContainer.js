import { connect } from 'react-redux';
import Ordering from './Ordering';
import { getAll, fetchFromAPI, getLoadingState, fetchChangeStatus } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  // fetchTablesStatus: () => dispatch(fetchChangeTableStatus()),
  fetchChangeStatus: (tableId, newStatus) => dispatch(fetchChangeStatus(tableId, newStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);
