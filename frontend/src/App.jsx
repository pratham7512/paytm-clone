import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Your authentication logic goes here

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? (
      element
    ) : (
      <Navigate to="/signin" replace state={{ from: window.location.pathname }} />
    );
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          {/* Use the PrivateRoute component for the Dashboard route */}
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
          <Route path="/send" element={<PrivateRoute element={<SendMoney />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
