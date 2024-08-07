import PropTypes from 'prop-types';

const LogIn = ({ toggleLogInSignUp, logInError, formFields, handleChange, handleSubmit }) => {

    return (
        <div>
            <div className="grid grid-cols-1 mx-11">
                <h3 className="font-bold text-lg text-black text-center -mb-4 font-spaceMono">Log in</h3>
                <div className="divider"></div>
                <h3 className="font-bold text-lg text-black text-left">Welcome!</h3>
                <div className="flex items-center">
                    <p className="text-black text-left mb-0 text-base"> New to PlanMyTrip?</p>
                    <button className="font-spaceMono btn btn-link no-underline hover:underline -ml-3 text-base text-primary on" onClick={() => toggleLogInSignUp('signup')}>Sign up</button>
                </div>
                <form data-testid="login-form" className="grid grid-cols-1 gap-2" onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2 text-black">
                    <input 
                        type="text" 
                        className="grow" 
                        placeholder="Username or email" 
                        id="username/email"
                        name="username/email"
                        value={formFields["username/email"]}
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
                    <button type="submit" className="btn btn-primary mt-4">Log in</button>
                </form>
                {logInError ? <div className="text-red-500 text-sm">{logInError}</div> : null}
            </div>
        </div>
    );
    };
    
    LogIn.propTypes = {
        toggleLogInSignUp: PropTypes.func.isRequired,
        logInError: PropTypes.string,
        formFields: PropTypes.object.isRequired,
        handleChange: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
    };

    export default LogIn;