import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from '../../redux/store/configureStore';
import AddAd from '.';

const store = configureStore();

describe('Given an AddAd component', () => {
  const Providers = ({ children }) => (
    <Provider store={store}>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </Provider>
  );
  test('Should print an add ad form', () => {
    render(<AddAd />, { wrapper: Providers });

    const title = screen.getByText(/New ad/i);
    expect(title).toBeInTheDocument();
  });

  test('Should send a new add', async () => {
    const dispatch = jest.fn();

    const { container } = render(<AddAd />, { wrapper: Providers });
    dispatch();
    const imageUrl = container.querySelectorAll('input')[0];
    const external = container.querySelectorAll('input')[1];
    const title = container.querySelectorAll('input')[2];
    const description = container.querySelector('textarea');
    const star4 = screen.getByLabelText('4 Stars');
    const price = container.querySelector('input[type="number"]');
    const foodRadioButton = screen.getByLabelText('Food');
    const date = container.querySelector('input[type="date"]');

    const submit = container.querySelector('button[type="submit"]');

    fireEvent.change(imageUrl, { target: { value: 'Ad URL' } });
    fireEvent.change(external, { target: { value: 'Ad external' } });
    fireEvent.change(title, { target: { value: 'My new Ad' } });
    fireEvent.change(description, { target: { value: 'New ad description' } });
    fireEvent.click(star4);
    fireEvent.change(price, { target: { value: 10 } });
    fireEvent.click(foodRadioButton);
    fireEvent.change(date, { target: { value: '2022-03-03' } });

    fireEvent.click(submit);

    expect(dispatch).toHaveBeenCalled();
  });
});
