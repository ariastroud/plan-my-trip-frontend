import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const AuthManager = () => {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleLogInSignUp = (form) => {
        if (form === 'login') {
            setCurrentForm('login');
            setLogInError(null);
            setFormFields({email: '',
                username: '',
                password: '',
                'username/email': '',}); 
        } else {
            setCurrentForm('signup');
            setLogInError(null);
            setFormFields({email: '',
                username: '',
                password: '',
                'username/email': '',}); 
        }
    };

    const [logInUserData, setLogInUserData] = useState(
        localStorage.getItem("logInData")
        ? JSON.parse(localStorage.getItem("logInData"))
        : null
    );

    const [logInError, setLogInError] = useState(null);

    const [formFields, setFormFields] = useState({
        email: '',
        username: '',
        password: '',
        'username/email': '',
    });

    const handleChange = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentForm === 'login') {
            logInUser(formFields["username/email"], formFields.password);
        } else {
            registerUser(formFields.email, formFields.username, formFields.password);
        }
    };

    const navigate = useNavigate();
    const logInUser = async (usernameOrEmail, password) => {
        const requestBody = { "username/email": usernameOrEmail, password: password };
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, requestBody);
            console.log(response.data);
            setLogInUserData(response.data.user);
            localStorage.setItem("logInData", JSON.stringify(response.data.user));

            navigate('/plantrip');
        } catch (error) {
            console.error('There was an error!', error.response.data.error);
            setLogInError(error.response.data.error);
        }
        };

    const registerUser = async (email, username, password) => {
        const requestBody = { email: email, username: username, password: password };
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/register`, requestBody);
            console.log(response.data);
            
            await logInUser(email, password);
        } catch (error) {
            console.error('There was an error!', error.response.data.error);
            setLogInError(error.response.data.error);
        }
    };

    return (
        <div>
            <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Let&apos;s go! ✈️</button>
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {currentForm === 'login' ? <LogIn 
                    toggleLogInSignUp={toggleLogInSignUp} 
                    logInError={logInError} 
                    formFields={formFields}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    /> : 
                    <SignUp 
                    toggleLogInSignUp={toggleLogInSignUp} 
                    logInError={logInError} 
                    formFields={formFields}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    />
                    
                }
            </div>
            </dialog>
        </div>
    );
    };
    
    export default AuthManager;