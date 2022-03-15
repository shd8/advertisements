/* eslint-disable default-param-last */
import actionTypes from '../Actions/actionTypes';

const {
  GET_ALL_ADS,
  GET_AD,
} = actionTypes;

const initialState = { ads: [], currentAd: {} };

const adsReducer = (state = initialState, { type, payload }) => {
  const result = { ...state };

  switch (type) {
    case GET_ALL_ADS:
      result.ads = payload;
      break;

    case GET_AD:
      result.currentAd = payload;
      break;

    default:
  }

  return result;
};

export default adsReducer;
