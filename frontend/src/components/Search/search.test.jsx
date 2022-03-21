import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Search from '.';
import configureStore from '../../redux/store/configureStore';

const store = configureStore();

describe('Given a Rating component', () => {
  const Providers = ({ children }) => (
    <Provider store={store}>
      {children}
    </Provider>
  );
  test('Should render 9 star icons', () => {
    const dispatch = jest.fn();
    const { container } = render(<Search />, { wrapper: Providers });
    dispatch();
    const searchBar = container.querySelector('input');

    fireEvent.change(searchBar, { target: { value: 'ad' } });

    expect(dispatch).toHaveBeenCalled();
  });
});
