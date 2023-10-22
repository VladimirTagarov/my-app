import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/Main.jsx";
import { NotFound } from "./pages/not-found/NotFound";
import { Login } from "./pages/login/Login.jsx";
import { Registration } from "./pages/registration/Registration.jsx";
import { Favorites } from "./pages/favorites/Favorites";
import { Category } from "./pages/category/Category";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute.jsx";

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <Main />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route
        path="/favorites"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <Favorites />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/category/:id"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <Category />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
