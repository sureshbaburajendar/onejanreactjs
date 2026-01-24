import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders login form', () => {
  render(<Login />);
  const nameLabel = screen.getByLabelText(/Master test super third Name:/i);
  const emailLabel = screen.getByLabelText(/Master Third Email:/i);
  expect(nameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
});
