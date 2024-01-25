import React, {useState, useEffect} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Board from './components/Board'
import Button from 'react-bootstrap/Button';

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
  }, [])
  
  const deleteWriting = (writingToDelete) => {
    setWritings(writings.filter(writing => 
      writing.id != writingToDelete.id)
    );
  }

  const modifyWriting = (writingToModify, modifyValue) => {
    setWritings(writings.map((writing) => 
      writing.id === writingToModify.id ?
        {...writing, body: modifyValue} 
        : 
        writing)
    );
  }
    
  return (
    <div className="App">
      <div className='container mt-5' style={{zIndex:'1'}}>
        <Board 
          writings={writings} 
          deleteWriting={deleteWriting}
          modifyWriting={modifyWriting}>   
        </Board>
      </div>
     
      <div style={{position:'fixed', bottom:'0', margin:'14px', width:'100%'}}>
        <Button variant="success" style={{width:'300px', zIndex:'2'}}>
          New Post
        </Button>
      </div>

      {/* <div style={{width:'100%', position:'fixed', top:'0', backgroundColor:'blue' }}>

      </div> */}
    </div>
  );
}

export default App;