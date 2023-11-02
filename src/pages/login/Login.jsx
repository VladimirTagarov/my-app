import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserContext } from "../../context";
import * as S from "./AuthPage.styles";
import { getLogin, getRegistration, getToken } from "../../api";

export const Login = ({ isLoginMode = true }) => {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { regUser, setRegUser, isLogin, setIsLogin, nameUser, setNameUser } =
    useUserContext();

  function setUser(user, token) {
    localStorage.setItem(user, token);
    navigate("/", { replace: true });
  }

  const handleLogin = () => {
    if (email === "" && password === "" && repeatPassword === "") {
      setError("Укажите почту/пароль");
    } else {
      setLoading(true);
      getLogin(email, password);
      getToken(email, password)
        .then((response) => {
          setUser("user", response.access);
          setNameUser(response.username);
          console.log(nameUser);
          setIsLogin(true);
          setRegUser(email);
          console.log(regUser);
        })
        .then(() => {
          setLoading(false);
        });

      // alert(`Выполняется регистрация: ${email} ${password}`);
      // setError("Неизвестная ошибка регистрации");
    }
  };

  const handleRegister = () => {
    if (email === "" && password === "" && repeatPassword === "") {
      setError("Укажите почту/пароль");
    } else if (password === repeatPassword) {
      setLoading(true);
      console.log("прохожу регистрацию");
      getRegistration(email, password).then(() => {
        getToken(email, password)
          .then((response) => {
            setUser("user", response.access);
            setNameUser(response.username);
            console.log(nameUser);
            setIsLogin(true);
            setRegUser(email);
          })
          .then(() => {
            setLoading(false);
          });
      });
    } else {
      setError("Пароли не совпадают");
    }
    // alert(`Выполняется вход: ${email} ${password}`);
    // setError("Неизвестная ошибка входа");
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                disabled={loading}
                onClick={() => handleLogin({ email, password })}
              >
                Войти
              </S.PrimaryButton>
              <Link to="/registration">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={loading} onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
};
