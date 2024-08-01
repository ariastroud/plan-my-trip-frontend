import { describe, test, expect, vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import LogIn from "./LogIn";

describe('LogIn Component', () => {
    const toggleLogInSignUp = vi.fn();
    const handleChange = vi.fn();
    const handleSubmit = vi.fn();
    const formFields = {
        "username/email": "",
        "password": ""
    };

    test('renders correctly', () => {
        render(<LogIn 
            toggleLogInSignUp={toggleLogInSignUp}
            logInError={null}
            formFields={formFields}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />);
        expect(screen.getByPlaceholderText('Username or email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByText('Sign up')).toBeInTheDocument();
        const whereToEatHeading = screen.getAllByText('Log in');
        expect(whereToEatHeading).toHaveLength(2);
    });

    test('calls toggleLogInSignUp on sign up button click', () => {
        render(<LogIn 
            toggleLogInSignUp={toggleLogInSignUp}
            logInError={null}
            formFields={formFields}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />);
        const signUpButton = screen.getByText('Sign up');
        fireEvent.click(signUpButton);
        expect(toggleLogInSignUp).toHaveBeenCalled();
    });

    test('calls handleChange on input change', () => {
        render(<LogIn 
            toggleLogInSignUp={toggleLogInSignUp}
            logInError={null}
            formFields={formFields}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />);
        const usernameInput = screen.getByPlaceholderText('Username or email');
        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        expect(handleChange).toHaveBeenCalled();
        const passwordInput = screen.getByPlaceholderText('Password');
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        expect(handleChange).toHaveBeenCalled();
    });

    test('calls handleSubmit on submit button click', () => {
        render(<LogIn 
            toggleLogInSignUp={toggleLogInSignUp}
            logInError={null}
            formFields={formFields}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />);
        const form = screen.getByTestId('login-form');
        fireEvent.submit(form);
        expect(handleSubmit).toHaveBeenCalled();
    });

    test('shows error message if logInError', () => {
        render(<LogIn 
            toggleLogInSignUp={toggleLogInSignUp}
            logInError={'Invalid username or password. Please try again.'}
            formFields={formFields}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />);
        expect(screen.getByText('Invalid username or password. Please try again.')).toBeInTheDocument();
    });
});
