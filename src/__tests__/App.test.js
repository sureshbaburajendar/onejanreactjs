import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App component', () => {
  test('renders the form elements', () => {
    render(<App />);
    
    // Check for the name input
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    
    // Check for the email input
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    
    // Check for the submit button
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('allows users to fill out the form and submit', async () => {
    // Mock the alert function
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<App />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    // Simulate user typing a name and email
    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john.doe@example.com');
    
    // Assert that the input values have changed
    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john.doe@example.com');
    
    // Simulate form submission
    await userEvent.click(submitButton);
    
    // Assert that the alert was called with the correct data
    expect(alertMock).toHaveBeenCalledWith('Name: John Doe, Email: john.doe@example.com');
    
    // Restore the original alert function
    alertMock.mockRestore();
  });
});
