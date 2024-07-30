import palmTrees from "../assets/images/palmTrees.jpg";
import AuthManager from "../components/AuthManager";
import './Hero.css';

const Hero = () => {
return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${palmTrees})` }}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
                <h1 className="mb-5 text-7xl font-bold font-custom text-bright-green">PlanMyTrip</h1>
                <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <AuthManager />
            </div>
        </div>
    </div>
);
};

export default Hero;
