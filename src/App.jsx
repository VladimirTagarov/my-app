import React from "react";
import { AppRoutes } from "./routes.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthorizedProvider } from "./context.js";
import { Provider } from "react-redux";
import store from "./store/index.js";

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleLogin = () => setUser({ login: "taradam" });

  const handleLogout = () => setUser(null);

  return (
    <Provider store={store}>
      <AuthorizedProvider>
        <div>
          <AppRoutes
            user={user}
            onAuthButtonClick={user ? handleLogout : handleLogin}
          />
        </div>
      </AuthorizedProvider>
    </Provider>
  );
}

export default App;
