import App from 'App';
import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders emotion button', () => {
  render(<App userName="test">test</App>);
  const emotionButton = screen.getByRole('button');
  expect(emotionButton).toHaveTextContent('hello, I am from emotion');
});
