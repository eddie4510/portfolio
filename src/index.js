import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import './index.css';
import './sideBar.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import post1 from "./content/post.md";
import post2 from "./content/post2.md";
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/


function NavBar() {

  return <nav className="navbar">
    <ul className="navbar-nav">
      <li>
        <a href="/" className="logo">
          <span>PORTFOLIO</span>
          <i id="logo" className="fas fa-angle-double-right"></i>
        </a>
      </li>
      <li className="nav-item">
        <a href="web" className="nav-link">
          <i className="fas fa-globe"></i>
          <span className="link-text">WEB</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="game" className="nav-link">
          <i className="fas fa-gamepad"></i>
          <span className="link-text">GAME</span>
        </a>
      </li>
    </ul>
  </nav>
}

//implement endsWith function
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (search, this_len) {
    if (this_len === undefined || this_len > this.length) {
      this_len = this.length;
    }
    return this.substring(this_len - search.length, this_len) === search;
  };
}

var mainEl = '';
function checkUrl() {
  let url = window.location+"";
  if (url.endsWith("game")) {

    mainEl = <ReactMarkdown source={post1} />;
  }
  else if (url.endsWith("web")) {
    mainEl = <ReactMarkdown source={post2} />;
  }
}

checkUrl();


let navEl = <NavBar />;
ReactDOM.render(
  navEl,
  document.getElementById('nav')
);


ReactDOM.render(
  mainEl,
  document.getElementById('main')
);


//npm run build
//npm run deploy
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
