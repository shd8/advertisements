import adsReducer from './adsReducer';

const data = { a: 'a', b: 'b' };
describe('Given and Ads Reducer', () => {
  test('When GET_ALL_ADS, should return ads', () => {
    expect(adsReducer({}, { type: 'GET_ALL_ADS', payload: data }))
      .toEqual({ all: data });
  });

  test('When GET_AD, should return a current add', () => {
    expect(adsReducer({}, { type: 'GET_AD', payload: data }))
      .toEqual({ currentAd: data });
  });

  test('When VOID_CURRENT_AD, should retrieve the current add', () => {
    expect(adsReducer({ currentAd: data }, { type: 'VOID_CURRENT_AD' }))
      .toEqual({ currentAd: {} });
  });

  test('When ADD_AD, should add a new add', () => {
    expect(adsReducer({ all: data }, { type: 'ADD_AD', payload: { c: 'c' } }))
      .toEqual({
        all: {
          a: 'a',
          b: 'b',
          c: 'c',
        },
      });
  });
});
