import PropTypes from 'prop-types';

const SignUp = ({toggleLogInSignUp, logInError, formFields, handleChange, handleSubmit}) => {

    return (
        <div>
            <div className="grid grid-cols-1 mx-11">
                <h3 className="font-bold text-lg text-black text-center -mb-4 font-spaceMono">Sign up</h3>
                <div className="divider"></div>
                <h3 className="font-bold text-lg text-black text-left">Join PlanMyTrip!</h3>
                <div className="flex items-center">
                    <p className="text-black text-left mb-0 text-base"> Already have an account?</p>
                    <button className="font-spaceMono btn btn-link no-underline hover:underline -ml-3 text-base text-primary on" onClick={() => toggleLogInSignUp('login')}>Log in</button>
                </div>
                <form data-testid="signup-form" className="grid grid-cols-1 gap-2" onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2 text-black">
                    <input 
                        type="text" 
                        className="grow" 
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={formFields.email}
                        onChange={handleChange}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-black">
                    <input 
                        type="text" 
                        className="grow" 
                        placeholder="Username" 
                        id="username"
                        name="username"
                        value={formFields.username}
                        onChange={handleChange}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-black">
                    <input 
                        type="password" 
                        className="grow" 
                        placeholder="Password" 
                        id="password"
                        name="password"
                        value={formFields.password}
                        onChange={handleChange}
                        />
                    </label>
                    <p className='text-sm text-black'>Password must be at least 8 characters long, contain at least one uppercase letter and must contain at least one digit.</p>
                    <button type="submit" className="btn btn-primary mt-4">Sign up</button>
                </form>
                {logInError ? <div className="text-red-500 text-sm">{logInError}</div> : null}
            </div>
        </div>
    );
    };
    
    SignUp.propTypes = {
        toggleLogInSignUp: PropTypes.func.isRequired,
        logInError: PropTypes.string,
        formFields: PropTypes.object.isRequired,
        handleChange: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired
    };

    export default SignUp;