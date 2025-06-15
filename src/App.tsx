import React from 'react';
import './App.css';
import TextCanvas from './components/TextCanvas';
import ControlBar from './components/ControlBar';
import Speech from 'react-text-to-speech';

function App() {
  const playThis = "Does this work?";
  return (
    <div className="App">
      <h1>Echo Read</h1>
      <TextCanvas/>
      <ControlBar isPlaying={false} />
      <Speech text={playThis} />
    </div>
  );
}

export default App;
