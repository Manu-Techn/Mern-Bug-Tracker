// Test if the app renders correctly
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app title', () => {
  render(<App />);
  expect(screen.getByText(/Bug Tracker/i)).toBeInTheDocument();
});
