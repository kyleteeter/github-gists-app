import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders initial message', () => {
  const { getByText } = render(<App />);
  const cleanupMessage = getByText(/Ready to Start GitHub Gists App/i);
  expect(cleanupMessage).toBeInTheDocument();
});
