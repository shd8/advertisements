import axios from 'axios';
import actionTypes from './actionTypes';

const { API_URL } = process.env.local;
const { GET_ALL_ADS, GET_AD } = actionTypes;

export const getAllAds = () => async (dispatch) => {
  const { data } = await axios(API_URL);

  dispatch({
    type: GET_ALL_ADS,
    payload: data,
  });
};

export const getAd = (adId) => async (dispatch) => {
  const { data } = await axios(`${API_URL}/${adId}`);

  dispatch({
    type: GET_AD,
    payload: data,
  });
};
