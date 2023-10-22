import React from "react";
import { AppRoutes } from "./routes.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthorizedProvider } from "./context.js";

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleLogin = () => setUser({ login: "taradam" });

  const handleLogout = () => setUser(null);

  return (
    <AuthorizedProvider>
      <div>
        <AppRoutes
          user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}
        />
      </div>
    </AuthorizedProvider>
  );
}

export default App;
