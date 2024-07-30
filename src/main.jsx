import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import TravelPlan from './pages/TravelPlan.jsx';
import PlanTrip from './pages/PlanTrip.jsx';
import UserProfile from './pages/UserProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/plantrip",
    element: <PlanTrip />,
  },
  {
    path: "/travelplan",
    element: <TravelPlan />,
  },
  {
    path: "/userprofile",
    element: <UserProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
