import React from "react";
import { useState } from "react";
import * as S from "./mainNav.styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context";

function MainNav() {
  const [open, setOpen] = useState(true);
  function burgerButton() {
    setOpen(!open);
  }
  const { regUser, setRegUser, isLogin, setIsLogin } = useUserContext();
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    setIsLogin(false);
    setRegUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="/img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={burgerButton}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {open ? (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <Link to="/">
                <S.MenuLink>Главное</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/favorites">
                <S.MenuLink>Мой плейлист</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/login">
                <S.MenuLink onClick={handleLogOut}>Выйти</S.MenuLink>
              </Link>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      ) : null}
    </S.MainNav>
  );
}

export default MainNav;
