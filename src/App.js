import {Route, BrowserRouter as Router, Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Linklist from './components/Linklist';
import VocabReviewer from './components/VocabReviewer';
import AudioList from './components/AudioList';

function App() {
  return (
    <div className="App">
      {/* <Link to="/vocab-reviewer">Vocab Reviewer</Link>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Linklist /> */}
      <VocabReviewer />
      {/* <AudioList /> */}
    </div>
  );
}

export default App;
