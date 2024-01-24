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
  
  function deletePost(post) {
    setWritings(writings.filter(writing => writing.id != post.id))
  }
    
  return (
    
    <div className="App container mt-5">
      <Board 
        writings={writings} 
        deletePost={deletePost}
      ></Board>
    </div>

  );
}

export default App;
