import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import tablesReducer from './tablesRedux';
import bookedTableReducer from './bookedTableRedux';
import orderReducer from './kitchenRedux';


// define initial state and shallow-merge initial data
const initialState = {
  tables: {
    data: {}, //tablica stolików pobrana z API
    loading: {
      active: false,
      error: false,
    }, //loading zawiera informacje o wczytywaniu danych – active mówi nam, czy trwa wczytywanie, a error będzie zawierał ew. komunikat o błędzie
  },
  bookedTable: {
    data: {}, //tablica rezerwacji i eventów z API
    loading: {
      active: false,
      error: false,
    },
  },
  order: {
    data: {}, //tablica zamówień  z API
    loading: {
      active: false,
      error: false,
    },
  },
};

// define reducers
const reducers = {
  tables: tablesReducer,
  bookedTable: bookedTableReducer,
  order: orderReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
