import { describe, test, expect, vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import SignUp from "./SignUp";

describe('SignUp Component', () => {
    const toggleLogInSignUp = vi.fn();
    const handleChange = vi.fn();
    const handleSubmit = vi.fn();
    const formFields = {
        "email": "",
        "username": "",
        "password": ""
    };

    test('renders correctly', () => {
        render(<SignUp 
            toggleLogInSignUp={toggleLogInSignUp}
            logInError={null}
            formFields={formFields}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />);
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByText('Log in')).toBeInTheDocument();
        const whereToEatHeading = screen.getAllByText('Sign up');
        expect(whereToEatHeading).toHaveLength(2);
    });

    test('calls toggleLogInSignUp on sign up button click', () => {
        render(<SignUp 
            toggleLogInSignUp={toggleLogInSignUp}
            logInError={null}
            formFields={formFields}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />);
        const logInButton = screen.getByText('Log in');
        fireEvent.click(logInButton);
        expect(toggleLogInSignUp).toHaveBeenCalled();
    });

    test('calls handleChange on input change', () => {
        render(<SignUp 
            toggleLogInSignUp={toggleLogInSignUp}
            logInError={null}
            formFields={formFields}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />);
        const emailInput = screen.getByPlaceholderText('Email');
        fireEvent.change(emailInput, { target: { value: 'email@email.com' } });
        expect(handleChange).toHaveBeenCalled();
        const usernameInput = screen.getByPlaceholderText('Username');
        fireEvent.change(usernameInput, { target: { value: 'username' } });
        expect(handleChange).toHaveBeenCalled();
        const passwordInput = screen.getByPlaceholderText('Password');
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        expect(handleChange).toHaveBeenCalled();
    });

    test('calls handleSubmit on submit button click', () => {
        render(<SignUp 
            toggleLogInSignUp={toggleLogInSignUp}
            logInError={null}
            formFields={formFields}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />);
        const form = screen.getByTestId('signup-form');
        fireEvent.submit(form);
        expect(handleSubmit).toHaveBeenCalled();
    });

    test('shows error message if logInError', () => {
        const errorMessages = [
            'Username, email, and password are required fields.',
            'Username already exists. Please choose a different one.',
            'Email address already registered. Please use a different email.',
            'Password must be at least 8 characters long.',
            'Password must contain at least one uppercase letter.',
            'Password must contain at least one digit.'
        ];

        errorMessages.forEach(error => {
            render(<SignUp 
                toggleLogInSignUp={toggleLogInSignUp}
                logInError={error}
                formFields={formFields}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />);
            expect(screen.getByText(error)).toBeInTheDocument();
    })});
});
