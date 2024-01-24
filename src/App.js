import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';

import Writing from './components/Writing'

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
    <div className="App">
      
      {/* <Writing></Writing> */}


    </div>
  );
}

export default App;
