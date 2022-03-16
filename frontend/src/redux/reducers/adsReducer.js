/* eslint-disable default-param-last */
import actionTypes from '../actions/actionTypes';

const {
  GET_ALL_ADS,
  GET_AD,
} = actionTypes;

const initialState = { all: [], currentAd: {} };

const adsReducer = (state = initialState, { type, payload }) => {
  const result = { ...state };

  switch (type) {
    case GET_ALL_ADS:
      result.all = payload || [];
      break;

    case GET_AD:
      result.currentAd = payload;
      break;

    default:
  }

  return result;
};

export default adsReducer;
