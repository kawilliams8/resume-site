import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders "testing" h2, test suite is up and running', () => {
  render(<App />);
  console.log(document.currentScript)
  console.log(document.getElementsByTagName('div').length)
  const h2 = screen.getByText(/testing/i);
  expect(h2).toBeInTheDocument();
});
