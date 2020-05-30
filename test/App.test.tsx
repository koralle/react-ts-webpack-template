import  React from 'react';
import { render, cleanup, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/ts/App';

afterEach(cleanup);

it('should take a snapshot', () => {
  const utils = render(<App name="koralle" />);
  const selectOutput = utils.getByTestId("app");

  expect(selectOutput).not.toBe(null);
});