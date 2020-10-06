import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

function NavBar() {

}

function Main() {
  return <div>
    <h1>Hi, my playground</h1>
    <p>
      I'm baby kale chips affogato ennui lumbersexual, williamsburg paleo quinoa
      iceland normcore tumeric. Kitsch coloring book retro, seitan schlitz
      tattooed biodiesel vexillologist neutra. Synth mumblecore deep v, umami
      selfies normcore gluten-free snackwave. Seitan ramps drinking vinegar
      venmo keytar, humblebrag VHS post-ironic tacos godard pour-over.
    </p>
  </div>
}

const el = <Main />;

ReactDOM.render(
  el,
  document.getElementById('main')
);


//npm run build
//npm run deploy
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
