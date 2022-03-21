import React from 'react';
import { render, screen } from '@testing-library/react';
import Rating from '.';

describe('Given a Rating component', () => {
  test('Should render 9 star icons', () => {
    render(<Rating rating={9} />);

    const numberOfStarIcons = screen.getAllByTestId('StarIcon').length;

    expect(numberOfStarIcons).toBe(9);
  });

  test('Should render 6 star border icons', () => {
    render(<Rating rating={4} />);

    const numberOfStarIcons = screen.getAllByTestId('StarBorderIcon').length;

    expect(numberOfStarIcons).toBe(6);
  });
});
