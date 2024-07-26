import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import TravelPlan from './components/TravelPlan.jsx';
import PlanTrip from './components/PlanTrip.jsx';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
