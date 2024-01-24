import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Post from './components/Forms/Post/Post';
import Content from './components/Content/Content';

function App() {

  const [post, setpost]=useState([]);

  function addPost(newpost) {
    setpost(prevpost=>{
      return [...prevpost, newpost]
    })
  }

  function deletePost(id) {
    setpost(prevpost=>{
      return prevpost.filter((postitem, index)=>{
        return index!==id;
      })
    })
  }

  return (
    <div className="App">
      <div><Header /></div>
      <div><Post onAdd={addPost}/></div>
      {post.map((postitem, index) => {
        return <Content key={index} id={index} path={postitem.src} alternate={postitem.alt} password={postitem.password} onDelete={deletePost}/>
      })}
      <div><Footer /></div>
    </div>
  );
}

export default App;
