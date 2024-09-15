import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import MainSection from './components/mainSection';

function App() {
  return (
    <div className="main">
    <div className="App">
      <nav>
      <div className="nav-wrapper">
        <Navigation/>
      </div>

      </nav>
    </div>
    <MainSection/>
    </div>
  );
}

export default App;
