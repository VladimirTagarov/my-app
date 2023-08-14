// import logo from "./logo.svg";
import "./App.css";
import MainNav from "./components/mainNavComponent/MainNav.js";
import Search from "./components/searchComponent/Search.js";
import Filter from "./components/filterComponent/Filter.js";
import Content from "./components/contentComponent/Content.js";
import Sidebar from "./components/sidebarComponent/Sidebar.js";
import Bar from "./components/barComponent/Bar.js";

function App() {
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
              <Content />
            </div>
            <Sidebar />
          </main>
          <div className="bar">
            <Bar />
          </div>
          <footer className="footer"></footer>
        </div>
      </div>
    </div>
  );
}

export default App;
