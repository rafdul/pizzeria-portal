import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({bookedTable}) => bookedTable.data;
export const getLoadingState = ({bookedTable}) => bookedTable.loading;

/* action name creator */
const reducerName = 'bookedTable';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* reducer */
/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/api/${api.bookedTable}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
        // console.log('res.data', res.data);
        // console.log('fetch res.data', fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export default function reducer(statePart = [], action = {}) {
  // console.log('statePart', statePart);
  // console.log('action', action);

  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}
