import Article from './components/Article';
import React, { useState } from 'react';
import Header from './components/Header/header';
import Menu from './components/Menu/menu';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer/footer';
import Comment from './components/Comment';


function App() {

  const [name, setName] = useState('Celke!');
  const [age, setAge] = useState('23');
  const [email, setEmail] = useState('fernandoventurini9@hotmail.com');

{/*
  functions Welcome(props) {
    return <span>{props.name}</span>;
  }

  class Welcome extends React.component {
    render() {
      return <span>{this.props.name}</span>
    }
  }
*/}

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
      <hr/>
      <h2>Welcome {name}</h2>
      <h3>Age: {age}</h3>
      <button 
        onClick={ () => setName('Venturini')}>
          Alterar
      </button>
      <button onClick={ () => setAge('44')}>
        Alterar
      </button>
      <hr/>
      <h3>E-mail: {email}</h3>
      <button
        onClick={ () => setEmail('devfernandouk@gmail.com')}>
          Alterar
      </button>

    </div>
  );
}

export default App;