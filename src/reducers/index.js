import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { TOGGLE_SIDEBAR } from '../actions';
import inbox from './inbox';
import email from './email';


function navToggleReducer(state = false, { type }) {
  switch (type) {
    case TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  inbox,
  email,
  isSidebarToggled: navToggleReducer,
  routing: routerReducer
});

export default rootReducer;
