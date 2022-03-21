import React from 'react';
import { render } from '@testing-library/react';
import AdList from './index';

const ads = [
  {
    id: 0,
    image: '',
    title: 'a',
    valid_until: 100000000,
    description: 'aaa',
  },
  {
    id: 1,
    image: '',
    title: 'b',
    valid_until: 200000000,
    description: 'bbb',

  },
];

describe('Given an AdList', () => {
  test('Should print a list of ads', () => {
    render(<AdList ads={ads} />);
  });
});
