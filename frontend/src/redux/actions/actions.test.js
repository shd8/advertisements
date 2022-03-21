import axios from 'axios';
import {
  voidCurrentAd, getAllAds, getAd, addAd,
} from './actions';

jest.mock('axios');

describe('Given an action creator', () => {
  test('Should return a VOID creator', () => {
    const result = voidCurrentAd();

    expect(result).toEqual({ type: 'VOID_CURRENT_AD' });
  });

  test('Should dispatch all ads when resolved', async () => {
    const dispatch = jest.fn();
    const data = { a: 'a', b: 'b' };

    axios.mockResolvedValue({ data });
    await getAllAds()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'GET_ALL_ADS',
      payload: data,
    });
  });

  test('Should dispatch the add requested', async () => {
    const dispatch = jest.fn();
    const data = { a: 'a', b: 'b' };

    axios.mockResolvedValue({ data });

    await getAd(1)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'GET_AD',
      payload: data,
    });
  });

  test('Should dispatch the add added', async () => {
    const dispatch = jest.fn();
    const data = { a: 'b', b: 'b' };

    axios.post.mockResolvedValue({ status: 201 });

    await addAd(data)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'ADD_AD',
      payload: data,
    });
  });

  test('Should throw error when add is not added', async () => {
    const dispatch = jest.fn();
    const data = { id: 3, a: 'b', b: 'b' };

    axios.post.mockResolvedValue({ status: 500 });
    await addAd(data)(dispatch);
    expect(dispatch).not.toHaveBeenCalled();
  });
});
