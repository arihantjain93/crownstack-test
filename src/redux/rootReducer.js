import { combineReducers } from 'redux';
import MainReducer from '../container/Main/reducer';

const rootReducer = combineReducers({
  main: MainReducer,
});

export default rootReducer;