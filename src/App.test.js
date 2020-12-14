import { render, screen } from '@testing-library/react';
import App from './App';

test('Render Link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Render Greeting', () => {
  render(<App />);
  const greetingText = screen.getByText(/hello/i);
  expect(greetingText).toBeInTheDocument();
});
