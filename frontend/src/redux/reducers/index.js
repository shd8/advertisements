import { combineReducers } from 'redux';
import adsReducer from './adsReducer';

const rootReducer = combineReducers({
  ads: adsReducer,
});

export default rootReducer;
