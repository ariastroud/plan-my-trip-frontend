import palmTrees from "../assets/images/palmTrees.jpg";
import AuthManager from "../components/AuthManager";
import './Hero.css';

const Hero = () => {
return (
<div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${palmTrees})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-15"></div>
    <div className="relative z-10 p-4">
        <h1 className="text-12xl font-bold font-custom text-bright-green">
            PlanMyTrip
        </h1>
        <p className="text-lg text-neutral-content text-left pl-4 mb-4 -mt-12 w-1/2 font-spaceMono">
        Plan your getaway with ease—PlanMyTrip uses AI to craft custom travel itineraries tailored to your budget for unforgettable adventures!
        </p>
        <div className="absolute top-8 right-8">
            <AuthManager />
        </div>
    </div>
</div>
);
};

export default Hero;
