import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Auth/Dashboard/Dashboard";
import ProtectedRoute from "./Pages/Auth/ProtectedRoute/Protectedroute";
import Buy from "./Pages/Auth/Dashboard/BuyStock";
import Stocks from "./Pages/Auth/Dashboard/Stocks";
import HomePage from "./Pages/Auth/Dashboard/Home";
import Settings from "./Pages/Auth/Dashboard/Settings";
import FrontPage from "./Pages/Auth/Dashboard/Front";

const App = () => {
  return (
    <BrowserRouter> {/* Wrapping Routes inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/bsp" element={<Buy />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
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
    </BrowserRouter>
  );
};

export default App;
