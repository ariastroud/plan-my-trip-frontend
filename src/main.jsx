import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import UserProfile from './pages/UserProfile.jsx';
import TripManager from './pages/TripManager.jsx';
import TravelPlan from './components/TravelPlan.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tripmanager",
    element: <TripManager />,
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
