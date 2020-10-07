import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import './index.css';
import './sideBar.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import postIndex from "./content/postIndex.json";
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
//declare navigation element
let navEl = <NavBar />;

class Post {
  constructor(id, title, category, src, thumbnail) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.src = src;
    this.thumbnail = thumbnail;
  }
}

function addPostsByCategory(category) {
  let posts = [];
  for (let i = 0; i < postIndex.posts.length; i++) {
    if (postIndex.posts[i]["category"] == category) {
      
      let newPost = new Post(
        postIndex.posts[i]["id"],
        postIndex.posts[i]["title"],
        postIndex.posts[i]["category"],
        postIndex.posts[i]["src"],
        postIndex.posts[i]["thumbnail"]);
      posts.push(newPost);
    }
  }
  return posts;
}

function MarkdownList(props) {
  const arr = props.data;
  const listItems = arr.map((post, index) =>
    <li key={index}>
      {post.title}
      <img src={require(post.thumbnail+"")} alt={post.title}/>
    </li> 
  );
  return <ul>{listItems}</ul>;
}

function GetPageByCategory(props) {
  const posts=addPostsByCategory(props.category);
  return <div>The category is {props.category} <MarkdownList data={posts} /></div>
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

//init main element
var mainEl = '';
function checkUrl() {
  let url = window.location + "";
  if (url.endsWith("game")) {
    //mainEl = <ReactMarkdown source={post1} />;
    mainEl = <GetPageByCategory category="game" />;
  }
  else if (url.endsWith("web")) {
    //mainEl = <ReactMarkdown source={post2} />;
    mainEl = <GetPageByCategory category="web" />;
  }
}
checkUrl();


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
