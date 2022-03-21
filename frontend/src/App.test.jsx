import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux/store/configureStore';

const store = configureStore();

const Providers = ({ children }) => (
  <Provider store={store}>
    <MemoryRouter>
      {children}
    </MemoryRouter>
  </Provider>
);

test('Renders App dashboard', () => {
  render(<App />, { wrapper: Providers });

  const title = screen.getByText(/Advertisements/i);
  expect(title).toBeInTheDocument();
});
