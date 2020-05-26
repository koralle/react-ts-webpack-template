import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<App name="koralle"/>);

  expect(asFragment).toHaveTextContent("koralle");
});

