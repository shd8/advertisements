import { combineReducers } from 'redux';

const testReducer = (state = {}) => ({ ...state, fer: 'lo peta' });

const rootReducer = combineReducers({
  testReducer,
});

export default rootReducer;
