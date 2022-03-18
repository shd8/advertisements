import axios from 'axios';
import actionTypes from './actionTypes';

const {
  GET_ALL_ADS, GET_AD, VOID_CURRENT_AD, ADD_AD,
} = actionTypes;
const { REACT_APP_API_URL } = process.env;

export const getAllAds = () => async (dispatch) => {
  const { data } = await axios(`${REACT_APP_API_URL}/ads/`);
  dispatch({
    type: GET_ALL_ADS,
    payload: data,
  });
};

export const getAd = (adId) => async (dispatch) => {
  const { data } = await axios(`${REACT_APP_API_URL}/ads/${adId}`);
  dispatch({
    type: GET_AD,
    payload: data,
  });
};

export const addAd = (newAd) => async (dispatch) => {
  const { status } = await axios.post(`${REACT_APP_API_URL}/ads`, newAd);
  if (status === 201) {
    dispatch({
      type: ADD_AD,
      payload: newAd,
    });
  } else {
    throw Error(`Ad ${newAd.id} not added`);
  }
};

export const voidCurrentAd = () => ({
  type: VOID_CURRENT_AD,
});
