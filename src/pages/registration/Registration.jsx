import React from "react";
import "../../App.css";

export const Registration = () => {
  return (
    <div>
      <h1>Страница регистрации</h1>
      <input type="text" placeholder="Почта" name="search" />
      <input type="text" placeholder="Пароль" name="search" />
      <input type="text" placeholder="Повторите пароль" name="search" />
      <button>Зарегистрироваться</button>
    </div>
  );
};
