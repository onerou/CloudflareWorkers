import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  axios.get('https://flat-heart-db88.1057674027.workers.dev/api/get')
    .then(res => {
      console.log(res.data,123);
    });
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
      </header>
    </div>
  );
}

export default App;
