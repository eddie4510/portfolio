import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './index.css';
import './sideBar.css';
import './post.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Nav from "./components/Nav";
import ShowPosts from "./components/ShowPosts";
import Post from "./components/Post";





/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

function getId(){
  //eg  /1 ->1
  let path=window.location.pathname;
  let id=path.substring(path.lastIndexOf('/')+1);
  return id;
}

function Homepage() {
  return <div className="home">
    <h1>Welcome</h1>
    <p>This is the portfolio of the guy who wants to make things interesting.</p>
  </div>;
}

//mainEl = <ReactMarkdown source={post2} />;
function Main() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/portfolio" render={(props) => <Homepage {...props}/>} />

        <Route exact path="/web" render={(props) => <ShowPosts {...props} category="web" />} />
        
        <Route exact path="/game" component={(props) => <ShowPosts {...props} category="game" />} />

        <Route path="/:id" component={(props) => <Post {...props} id={getId()} />} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <Main/>,
  document.getElementById('main')
);


//npm run build
//npm run deploy
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
