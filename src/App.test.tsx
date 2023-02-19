import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Stock Market Recommender', () => {
  render(<App />);
  const linkElement = screen.getByText('Stock Market Recommender');
  expect(linkElement).toBeInTheDocument();
});
