import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Linklist from './pages/Linklist';
import VocabReviewer from './pages/VocabReviewer';
import AudioList from './pages/AudioList';
import Editor from './pages/Editor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/link-list" element={<Linklist />} />
        <Route path="/vocab-reviewer" element={<VocabReviewer />} />
        <Route path="/audio-list" element={<AudioList />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
      
    </div>
  );
}

export default App;
