import React, { useState } from "react";
import LoginPage from "./LoginPage";
import LaptopForm from './LaptopForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Manage login state
  const [signIn, toggle] = useState(true);  // Toggle between SignIn and SignUp

  // Handle login by updating login state
  const handleLogin = () => {
    console.log("Login successful!");  // Verify if this is called
    setIsLoggedIn(true);  // Update login state
  };

  return (
    <div>
      {isLoggedIn ? (
        <LaptopForm />  // Show LaptopForm after successful login
      ) : (
        <LoginPage signIn={signIn} toggle={toggle} onLogin={handleLogin} />  // Show LoginPage until logged in
      )}
    </div>
  );
}

export default App;
