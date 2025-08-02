import React from 'react';
import Header from './components/Header/header';
import Article from './components/Article';
import Menu from './components/Menu/menu';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer/footer';
import Comment from './components/Comment';

function App() {

  const comment = {
    date: new Date(),
    text: "Hello",
    author: {
      name: 'Cesar',
      avatarUrl: 'https://img.fantaskycdn.com/ebb4a5b67a7cf83a322b6e6cf34f56ee_1080x.jpg'
    }
  }

  return (
    <div>
      <Header/>
      <Menu/>
      <Main/>
      <Article/>
      <Comment 
        date={comment.date}
        text={comment.text}
        author={comment.author} 
      />
      <Aside/>
      <Footer/>
      <h1>Tecnology & Programming!!!</h1>
    </div>
  );
}

export default App;
