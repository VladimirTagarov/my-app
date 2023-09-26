import React from "react";
import { AppRoutes } from "./routes.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleLogin = () => setUser({ login: "taradam" });

  const handleLogout = () => setUser(null);

  return (
    <div>
      <AppRoutes
        user={user}
        onAuthButtonClick={user ? handleLogout : handleLogin}
      />
    </div>
  );
}

export default App;
