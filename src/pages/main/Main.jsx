import React from "react";
import * as S from "./Main.style";
import { useState } from "react";
import { useEffect } from "react";
import MainNav from "../../components/mainNavComponent/MainNav";
import Search from "../../components/searchComponent/Search";
import Filter from "../../components/filterComponent/Filter";
import Content from "../../components/contentComponent/Content";
import ContentSkeleton from "../../components/contentSkeletonComponent/ContentSkeleton";
import Sidebar from "../../components/sidebarComponent/Sidebar";
import SidebarSkeleton from "../../components/sidebarSkeletonComponent/sidebarSkeleton";
import Bar from "../../components/barComponent/Bar";
import BarSkeleton from "../../components/barSkeletonComponent/BarSkeleton";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
button,
._btn {
  cursor: pointer;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
  background-color: #181818
}
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("./fonts/StratosSkyeng.woff2") format("woff2"),
    url("./fonts/StratosSkyeng.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
`;

export const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setInterval(() => {
      setLoading(false);
    }, 5000);
    return () => {
      clearInterval(loadingTimer);
    };
  }, []);

  return (
    <div>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNav />
            <S.MainCenterblock>
              <Search />
              <S.Centerblock>Треки</S.Centerblock>
              <Filter />
              {loading ? <ContentSkeleton /> : <Content />}
            </S.MainCenterblock>
            {loading ? <SidebarSkeleton /> : <Sidebar />}
          </S.Main>
          <S.Bar>{loading ? <BarSkeleton /> : <Bar />}</S.Bar>
          <S.Footer></S.Footer>
        </S.Container>
      </S.Wrapper>
    </div>
  );
};
