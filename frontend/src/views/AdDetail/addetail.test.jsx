/* eslint-disable no-promise-executor-return */
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../redux/store/configureStore';
import AdDetail from '.';

const mockStore = configureStore;
describe('Given an AdDetail component', () => {
  test(
    'Renders the detail of the stored currentAd in the param route after a second',
    async () => {
      const store = mockStore({
        all: {
          id: 1,
          category: 'food',
          title: 'banana',
          image: 'url',
          description: 'banana description',
          rating: 5,
          price: 6,
          valid_until: 1000000,
          external: '',
        },
      });

      const Providers = ({ children }) => (
        <Provider store={store}>
          <MemoryRouter>
            {children}
          </MemoryRouter>
        </Provider>
      );

      render(<AdDetail />, { wrapper: Providers });
    },
  );
});
