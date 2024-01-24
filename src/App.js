import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Board from './components/Board'

function App() {
  const [writings, setWritings] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
      setWritings(posts);
    })
    .then(() => {
      writings.forEach(cpost => {
        console.log(cpost.id, cpost.title);
      });
    })
  }, [])
  
    
  return (
    
    <div className="App container mt-5">
      <Board writings={writings}></Board>
    </div>

  );
}

export default App;
