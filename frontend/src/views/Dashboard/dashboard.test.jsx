/* eslint-disable no-promise-executor-return */
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Dashboard from '.';
import configureStore from '../../redux/store/configureStore';

const store = configureStore({ ads: { all: [{ id: 0 }] } });

const Providers = ({ children }) => (
  <Provider store={store}>
    <MemoryRouter>
      {children}
    </MemoryRouter>
  </Provider>
);

describe('Given a Dashboard', () => {
  test('Should print an Ad List after a second', async () => {
    render(<Dashboard />, { wrapper: Providers });

    await new Promise((resolve) => setTimeout(() => resolve(), 1500));

    const adlist = screen.getAllByTestId('ad-list').length;
    expect(adlist).toBe(1);
  });
});
