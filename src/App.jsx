// import logo from "./logo.svg";
import "./App.css";
import MainNav from "./components/mainNavComponent/MainNav.js";
import Search from "./components/searchComponent/Search.js";
import Filter from "./components/filterComponent/Filter.js";
import Content from "./components/contentComponent/Content.js";
import ContentSkeleton from "./components/contentSkeletonComponent/ContentSkeleton.js";
import Sidebar from "./components/sidebarComponent/Sidebar.js";
import SidebarSkeleton from "./components/sidebarSkeletonComponent/sidebarSkeleton.js";
import Bar from "./components/barComponent/Bar.js";
import BarSkeleton from "./components/barSkeletonComponent/BarSkeleton.js";
import { useState } from "react";
import { useEffect } from "react";

function App() {
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
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <MainNav />
            <div className="main__centerblock centerblock">
              <Search />
              <h2 className="centerblock__h2">Треки</h2>
              <Filter />
              {loading ? <ContentSkeleton /> : <Content />}
            </div>
            {loading ? <SidebarSkeleton /> : <Sidebar />}
          </main>
          <div className="bar">{loading ? <BarSkeleton /> : <Bar />}</div>
          <footer className="footer"></footer>
        </div>
      </div>
    </div>
  );
}

export default App;
