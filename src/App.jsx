// import logo from "./logo.svg";
import "./App.css";
import mainNav from "./components/mainNavComponent/MainNav.js";
import search from "./components/searchComponent/search.js";
import filter from "./components/filterComponent/filter.js";
import content from "./components/contentComponent/content.js";
import sidebar from "./components/sidebarComponent/sidebar.js";
import bar from "./components/barComponent/bar.js";

function App() {
  return (
    <div classNameName="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <mainNav />
            <div className="main__centerblock centerblock">
              <search />
              <h2 className="centerblock__h2">Треки</h2>
              <filter />
              <content />
            </div>
            <sidebar />
          </main>
          <div className="bar">
            <bar />
          </div>
          <footer className="footer"></footer>
        </div>
      </div>
    </div>
  );
}

export default App;
