import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Auth/Dashboard/Dashboard";
import ProtectedRoute from "./Pages/Auth/ProtectedRoute/Protectedroute";
import Buy from "./Pages/Auth/Dashboard/Buystock";
import Stocks from "./Pages/Auth/Dashboard/Stocks";
import HomePage from "./Pages/Auth/Dashboard/Home";
import Settings from "./Pages/Auth/Dashboard/Settings";
import BottomNavbar from "./Pages/Auth/Dashboard/BottomNavbar";

const App = () => {
  return (
    <BrowserRouter>
      <RoutesWrapper />
    </BrowserRouter>
  );
};

// Create a wrapper component to use the useLocation hook
const RoutesWrapper = () => {
  const location = useLocation();

  // Check if the current route is not login or signup
  const shouldShowBottomNavbar = location.pathname !== "/signup" && location.pathname !== "/";

  return (
    <>
      {/* Conditionally render the BottomNavbar */}
      {shouldShowBottomNavbar && <BottomNavbar />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/bsp" element={<Buy />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
