import React from "react";
import * as S from "./Sidebar.style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context";

export const category = [1, 2, 3];

function Sidebar() {
  const { regUser, setRegUser, isLogin, setIsLogin } = useUserContext();
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    setIsLogin(false);
    setRegUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{regUser}</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg onClick={handleLogOut} alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          {category.map((id) => (
            <S.SidebarItem key={id}>
              <Link to={`/category/${id}`}>
                <S.SidebarLink>
                  <S.SidebarImg
                    src={`img/playlist0${id}.png`}
                    alt="day's playlist"
                  />
                </S.SidebarLink>
              </Link>
            </S.SidebarItem>
          ))}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

export default Sidebar;
