import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const setUser = () => {
    localStorage.setItem("user", "token");
    navigate("/", { replace: true });
  };
  return (
    <div>
      <h1>Страница логина</h1>
      <button onClick={setUser}>Войти</button>
      <Link to="/registration">Перейти к регистрации</Link>
    </div>
  );
};
