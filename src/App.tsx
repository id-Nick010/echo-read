import React from 'react';
import './App.css';
import TextCanvas from './components/TextCanvas';
import ControlBar from './components/ControlBar';
import Speech from 'react-text-to-speech';
import {AppProvider} from './contexts/AppContext';

function App() {
  const playThis = "Does this work?";
  return (
    <AppProvider>
      <div className="App">
      <h1>Echo Read</h1>
      <TextCanvas/>
      <ControlBar isPlaying={false} />
      <Speech text={playThis} />
      </div>
    </AppProvider>
  );
}

export default App;
