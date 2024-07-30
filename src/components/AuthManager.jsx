import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthManager = () => {
    const [showSignIn, setShowSignIn] = useState(true);
    const toggleSignInSignUp = () => {
        setShowSignIn(prevState => !prevState);
    };

    return (
        <div>
            <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Let&apos;s go! ✈️</button>
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {showSignIn ? <SignIn toggleSignInSignUp={toggleSignInSignUp} /> : <SignUp toggleSignInSignUp={toggleSignInSignUp}/>}
            </div>
            </dialog>
        </div>
    );
    };
    
    export default AuthManager;