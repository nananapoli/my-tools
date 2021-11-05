import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Helmet from 'react-helmet';

import './style.less';

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <Helmet>
          <link rel="shortcut icon" href="https://s2.ax1x.com/2019/07/17/ZqRakQ.png"></link>
          <title>napoli's box</title>
          
        </Helmet>
        <h1>Tool List</h1>
        <nav>
          <Link to="link-list">link-list</Link>
          <Link to="vocab-reviewer">vocab-reviewer</Link>
          <Link to="audio-list">audio-list</Link>
          <Link to="editor">editor</Link>
        </nav>
      </div>
    );
  }
}

export default Home;
