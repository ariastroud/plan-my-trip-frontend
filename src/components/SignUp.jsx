import PropTypes from 'prop-types';

const SignUp = ({toggleSignInSignUp}) => {
    return (
        <div>
            <div className="grid grid-cols-1 mx-11">
                <h3 className="font-bold text-base text-black text-center -mb-4">Sign up</h3>
                <div className="divider"></div>
                <h3 className="font-bold text-lg text-black text-left">Join PlanMyTrip!</h3>
                <div className="flex items-center">
                    <p className="text-black text-left mb-0 text-base"> Already have an account?</p>
                    <button className="btn btn-link no-underline hover:underline -ml-3 text-base text-secondary on" onClick={() => toggleSignInSignUp()}>Sign in</button>
                </div>
                <div className="grid grid-cols-1 gap-2">
                    <label className="input input-bordered flex items-center gap-2 text-black">
                    <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-black">
                    <input type="text" className="grow" placeholder="Username" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-black">
                    <input type="password" className="grow" placeholder="Password" />
                    </label>
                </div>
                
                {/* TODO: 
                - continue button sends data to backend
                - error handling for invalid input
                 */}
                <button className="btn btn-secondary mt-4">Continue</button>
            </div>
        </div>
    );
    };
    
    SignUp.propTypes = {
        toggleSignInSignUp: PropTypes.func.isRequired,
    };

    export default SignUp;