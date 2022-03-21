import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdListElement from '.';

describe('Given a AdListElement', () => {
  test('Should print an AdListElement', () => {
    render(
      <MemoryRouter>
        <AdListElement
          id={1}
          image=""
          title="a"
          description="aaa"
          validUntil={10000000000}
        />
      </MemoryRouter>,
    );
    const image = screen.getByRole('img');
    fireEvent.load(image);
  });
});
