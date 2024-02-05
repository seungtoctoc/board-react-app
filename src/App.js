import React, {useState, useEffect} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Board from './components/Board'
import Publish from './components/Publish';
import axios from 'axios';
import * as cheerio from 'cheerio';

function App() {
  const [writings, setWritings] = useState([])
  const url = 'http://127.0.0.1:3000/comment/';

  useEffect(() => {
    console.log('useEffect');
    // loadData();
    getCommentsFromMongo();
  }, [])

  const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      return response.json();
    })
    .then(posts => {
      setWritings(posts);
      console.log('load set Writings');
    })
  }
  
  const deleteWriting = (writingToDelete) => {
    setWritings(writings.filter(writing => 
      writing.id != writingToDelete.id)
    );

    // fetch(`https://jsonplaceholder.typicode.com/posts/${writingToDelete.id}`, {
    // method: 'DELETE',
    // })
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error('포스트 삭제 실패');
    //   }
    //   console.log('포스트 삭제 성공');
    // })
    // .then(() => {
    //   loadData();
    // })

    axios.delete(url + writingToDelete.id)
      .then(resp => {
        console.log(resp.data);
        getCommentsFromMongo();
      })
      .catch(err => {
        console.log(err);
      }) 
  }

  const modifyWriting = (writingToModify, modifyValue) => {
    // setWritings(writings.map((writing) => 
    //   writing.id === writingToModify.id ?
    //     {...writing, body: modifyValue} 
    //     : 
    //     writing)
    // );

    const data = {
      writer : writingToModify.title,
      content : modifyValue
    }

    axios.put(url + writingToModify.id, data)
      .then(resp => {
        console.log(resp.data);
        getCommentsFromMongo();
      })
      .catch(err => {
        console.log(err);
      }) 

  }

  const publishWriting = (title, body) => {
    const data = {
      writer : title,
      content : body
    }

    axios.post(url, data)
      .then(resp => {
        console.log(resp.data);
        getCommentsFromMongo();
      })
      .catch(err => {
        console.log(err);
      }) 
    // setWritings([...writings, {title:title, body:body, id:id}])
  }

  const getCommentsFromMongo = () => {
    
    axios.get(url)
      .then(resp => {
        const data = resp.data;

        console.log(data);
      

        const mongoData = data.map(ele => ({
            title: ele.writer,
            body: ele.content,
            id: ele._id
        }));

        setWritings(mongoData);
      })
      .catch(err => {
        console.log(err);
      })
    // const $ = cheerio.load(resp.data);
    


  }
    
  return (
    <div className="App">
      <Board
          writings={writings} 
          deleteWriting={deleteWriting}
          modifyWriting={modifyWriting}>   
      </Board>

      <Publish
        publishWriting={publishWriting}>
      </Publish>
    </div>
  );
}

export default App;