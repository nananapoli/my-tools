import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link } from 'react-router';
// import {IndexRoute} from 'react-router';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import VocabReviewer from './VocabReviewer';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <Router>
  //   <Route path="/" component={App} >
  //     <Route path="/vocab-reviewer" component={VocabReviewer} />
  //   </Route>
  //   {/* <Route path="/vocab-reviewer" component={VocabReviewer} /> */}
  // </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
