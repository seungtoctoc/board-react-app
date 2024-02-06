import React, {useState, useEffect} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Board from './components/Board'
import Publish from './components/Publish';
import axios from 'axios';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [writings, setWritings] = useState([])
  const [keyword, setKeyword] = useState('');
  const commentUrl = 'http://127.0.0.1:3000/todo/';

  // useEffect(() => { 
  //   console.log('start');
  //   // loadData();
  //   getComments();
  // }, [])

  useEffect(() => { 
    axios.get(commentUrl + keyword)
      .then(resp => {
        const data = resp.data;

        console.log(data);
      
        const mongoData = data.map(ele => ({
            writer: ele.writer,
            content: ele.content,
            color: ele.color,
            id: ele._id
        }));

        setWritings(mongoData);
      })
      .catch(err => {
        console.log(err);
      })

  }, [keyword])

  // const loadData = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(posts => {
  //     setWritings(posts);
  //     console.log('load set Writings');
  //   })
  // }
  
  const deleteWriting = (writingToDelete) => {
    setWritings(writings.filter(writing => 
      writing.id !== writingToDelete.id)
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

    axios.delete(commentUrl + writingToDelete.id)
      .then(resp => {
        console.log(resp.data);
        getComments();
      })
      .catch(err => {
        console.log(err);
      }) 
  }

  const modifyWriting = (writingToModify, modifyTitle, modifyContent, modifyColor) => {
    // setWritings(writings.map((writing) => 
    //   writing.id === writingToModify.id ?
    //     {...writing, body: modifyValue} 
    //     : 
    //     writing)
    // );

    const data = {
      writer : modifyTitle,
      content : modifyContent,
      color : modifyColor
    }

    axios.put(commentUrl + writingToModify.id, data)
      .then(resp => {
        console.log(resp.data);
        getComments();
      })
      .catch(err => {
        console.log(err);
      }) 
  }

  const publishWriting = (title, body, color) => {
    const data = {
      writer : title,
      content : body,
      color : color
    }

    axios.post(commentUrl, data)
      .then(resp => {
        console.log(resp.data);
        getComments();
      })
      .catch(err => {
        console.log(err);
      }) 
    // setWritings([...writings, {title:title, body:body, id:id}])
  }

  const getComments = () => {
    console.log('get comments!')

    axios.get(commentUrl)
      .then(resp => {
        const data = resp.data;

        console.log(data);
      

        const mongoData = data.map(ele => ({
            writer: ele.writer,
            content: ele.content,
            color: ele.color,
            id: ele._id
        }));

        setWritings(mongoData);
      })
      .catch(err => {
        console.log(err);
      })
  }
    
  return (
    <div className="App">
      <Header></Header>

      <Search
        setKeyword={setKeyword}>
      </Search>

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