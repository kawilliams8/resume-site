import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "testing" h2, test suite is up and running', () => {
  render(<App />);
  const h2 = screen.getByText(/testing/i);
  expect(h2).toBeInTheDocument();
});
