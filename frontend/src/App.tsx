import * as React from 'react';
import './App.css';
// @ts-ignore
import logo from './logo.svg';
import {useEffect, useState} from "react";

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/books")
            .then(response => response.json())
            .then(response => setData([response]))
            .catch(error => setData(["error"]))
    }, []);

  return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
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
      </>

  );
}

export default App;
