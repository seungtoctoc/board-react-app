import React, {useState, useEffect} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  
  const deleteWriting = (writingToDelete) => {
    setWritings(writings.filter(writing => 
      writing.id != writingToDelete.id
      )
    );
  }

  const modifyWriting = (writingToModify, modifyValue) => {
    setWritings(writings.map((writing) => 
      writing.id === writingToModify.id ?
        {...writing, body: modifyValue} : writing
      )
    );
  }
    
  return (
    <div className="App container mt-5">
      <Board 
        writings={writings} 
        deleteWriting={deleteWriting}
        modifyWriting={modifyWriting}
      ></Board>
    </div>
  );
}

export default App;